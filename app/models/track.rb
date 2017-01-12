# == Schema Information
#
# Table name: tracks
#
#  id                       :integer          not null, primary key
#  title                    :string           not null
#  description              :text
#  author_id                :integer          not null
#  created_at               :datetime
#  updated_at               :datetime
#  audio_file_name          :string
#  audio_content_type       :string
#  audio_file_size          :integer
#  audio_updated_at         :datetime
#  album_image_file_name    :string
#  album_image_content_type :string
#  album_image_file_size    :integer
#  album_image_updated_at   :datetime
#

class Track < ActiveRecord::Base
  has_attached_file :album_image, default_url: "missing.jpeg"
  validates_attachment_content_type :album_image, content_type: /^image\/(jpg|jpeg|pjpeg|png|x-png)$/, message: 'file type is not allowed (only jpeg/png images)'

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: [ 'audio/mpeg', ['audio/mpeg'], 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio']
  validates_attachment_size :audio, :less_than => 20.megabytes
  validates :title, :audio, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: 'User'

  has_many :remarks

  def album_image_url
    if self.album_image.url === "missing.jpeg"
      return self.user.image_url
    else
      self.album_image.url
    end
  end

  def author_name
    self.user.username
  end

  def author_image_url
    self.user.image_url
  end

  def audio_url
    self.audio.url
  end

end
