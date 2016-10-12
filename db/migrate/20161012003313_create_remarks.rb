class CreateRemarks < ActiveRecord::Migration
  def change
    create_table :remarks do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end
    add_index :remarks, :author_id
    add_index :remarks, :track_id
  end
end
