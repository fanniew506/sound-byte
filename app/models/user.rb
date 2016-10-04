class User < ActiveRecord::Base
  validates :session_token, :password_digest, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token
  attr_reader :password

  def ensure_session_token
    self.session_token ||= SecureRandom.base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.base64
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if !user.nil? && user.is_password?(password)
      return user
    end
    return nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
