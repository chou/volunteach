# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  fname           :string(255)
#  lname           :string(255)
#  email           :string(255)
#  password_digest :string(255)
#  location        :string(255)
#  session_token   :string(255)
#  facebook_id     :string(255)
#  phone_number    :string(255)
#  avg_rating      :float            default(0.0), not null
#  num_ratings     :integer          default(0), not null
#  available       :boolean          default(FALSE), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#



class User < ActiveRecord::Base
  attr_accessible :email, :fname, :lname, :lat, :lng, :facebook_id,
                  :password, :session_token, :phone_number, :available,
                  :topic_ids

  validates :password_digest, presence: {message: "Password cannot be blank"}
  validates :phone_number, presence: true 
  validates :fname, presence: {message: "First name cannot be blank"}
  validates :lname, presence: {message: "Last name cannot be blank"}
  validates :phone_number, length: {is: 10}
  validates :phone_number, numericality: {only_integer: true}
  validate :email_or_facebook

  def email_or_facebook
    if self.email.blank? && self.facebook_id.blank?
      errors.add(:base, "You must have either an email or facebook.") 
    end
  end

  has_one :student_meeting, foreign_key: :student_id, class_name: "Meeting", 
    dependent: :destroy
  has_one :tutor_meeting, foreign_key: :tutor_id, class_name: "Meeting", 
    dependent: :destroy
  has_many :tutor_topics, foreign_key: :tutor_id, dependent: :destroy
  has_many :topics, through: :tutor_topics, source: :topic

  def meeting
    tutor_meeting || student_meeting
  end

  def find_closest_available_tutor(topic_id)
    available_tutors = User.includes(:topics)
      .where("users.id != ?", id)
      .where("users.available = ?", true)
      .where("topics.id = ?", topic_id)
      .select("users.lat, users.lng, users.id")

    return nil if available_tutors.empty?

    locations = available_tutors.map { |u| [u.lat,u.lng, u.id] }
    kd = Kdtree.new(locations)
    User.find(kd.nearest(lat, lng))
  end

  def role
    if tutor_meeting
      "tutor"
    elsif student_meeting
      "student"
    else
      nil
    end
  end

  def password=(password)
    self.password_digest = (password.blank? ? 
      nil : BCrypt::Password.create(password))
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def verify_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def self.authenticate_by_credentials(email, password)
    user = User.find_by_email(email)

    return nil if user.nil?

    user.verify_password?(password) ? user : nil
  end

  def self.authenticate_by_facebook(secret)
    response = HTTParty.get(
      "http://graph.facebook.com/me?access_token=#{secret}")
      self.find_by_facebook_id(JSON.parse(response.body)[:id])
  end

  def add_rating!(rating)
    ratings = num_ratings * avg_rating.to_f
    self.num_ratings += 1
    self.avg_rating = (ratings + rating.to_f) / num_ratings
    save!
  end

end
