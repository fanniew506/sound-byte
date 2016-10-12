# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime
#  updated_at         :datetime
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ActiveRecord::Base
  has_attached_file :image, default_url: "https://s3.amazonaws.com/sound-byte-dev/users/images/000/000/001/original/default_user.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :session_token, :password_digest, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :tracks,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: 'Track'

  has_many :remarks,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: 'Remark'

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

  def image_url
    self.image.url
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
