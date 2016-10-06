class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :tracks, :author_id
  end
end
