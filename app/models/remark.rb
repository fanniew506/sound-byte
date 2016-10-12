# == Schema Information
#
# Table name: remarks
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  track_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Remark < ActiveRecord::Base
  validates :body, :author_id, :track_id, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: 'User'

  belongs_to :track

  def author_name
    self.user.username
  end

  def author_image_url
    self.user.image_url
  end

end
