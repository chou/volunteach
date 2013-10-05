

class User < ActiveRecord::Base
  attr_accessible :email, :fname, :lname, :location, :facebook_id,
                  :password, :session_token, :phone_number, :available

  validates :password_digest, presence: { message: "Password cannot be blank"}
  validates :email, :phone_number, presence: true 
  validates :fname, presence: { message: "First name cannot be blank"}
  validates :lname, presence: { message: "Last name cannot be blank"}
  validates :phone_number, length: {is: 10}

  has_one :student_meeting, foreign_key: :student_id, class_name: "Meeting", 
    dependent: :destroy
  has_one :tutor_meeting, foreign_key: :tutor_id, class_name: "Meeting", 
    dependent: :destroy
  has_many :tutor_topics, foreign_key: :tutor_id, dependent: :destroy
  has_many :topics, through: :tutor_topics, source: :topic

  def meeting
    tutor_meeting || student_meeting
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

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)

    return nil if user.nil?

    user.verify_password?(password) ? user : nil
  end

  def add_rating!(rating)
    ratings = num_ratings * avg_rating
    self.num_ratings += 1
    self.avg_rating = (ratings + rating) / num_ratings
    save!
  end

end
