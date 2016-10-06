class RemoveAvatarAttachement < ActiveRecord::Migration
  def change
    remove_attachment :users, :avatar
  end
end
