# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  author_id   :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Track < ActiveRecord::Base
  validates :title, presence: true

  belongs_to :user

  
end
