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
#  facebook_id     :integer
#  phone_number    :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_accessible :email, :fname, :lname, :location, :facebook_id,
                  :password, :session_token, :phone_number

  validates :password_digest, presence: { message: "Password cannot be blank"}
  validates :email, :phone_number, presence: true 
  validates :fname, presence: { message: "First name cannot be blank"}
  validates :lname, presence: { message: "Last name cannot be blank"}
  validate :phone_number_is_correct_format

  def phone_number_is_correct_format
    unless (Math.log10(self.phone_number).floor + 1) == 10
      errors.add(:phone_number, "must be 10 digits long")  
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

end
