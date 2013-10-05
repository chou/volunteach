class User < ActiveRecord::Base
  attr_accessible :email, :fname, :lname, :location, :facebook_id,
                  :password, :session_token

  validates :password_digest, presence: { message: "Password cannot be blank"}
  validates :email, presence: true 
  validates :fname, presence: { message: "First name cannot be blank"}
  validates :lname, presence: { message: "Last name cannot be blank"}

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
