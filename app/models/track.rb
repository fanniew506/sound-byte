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
  validates_attachment_content_type :album_image, content_type: /\Aimage\/.*\Z/
  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: ['application/mp3', 'application/x-mp3', 'audio/mpeg', 'audio/mp3']
  validates :title, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: 'User'

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
