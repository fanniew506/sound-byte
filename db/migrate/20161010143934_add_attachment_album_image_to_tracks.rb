class AddAttachmentAlbumImageToTracks < ActiveRecord::Migration
  def self.up
    change_table :tracks do |t|
      t.attachment :album_image
    end
  end

  def self.down
    remove_attachment :tracks, :album_image
  end
end
