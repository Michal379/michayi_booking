class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.belongs_to :hotel, null: false, foreign_key: true
      t.string :type
      t.integer :capacity
      t.integer :price

      t.timestamps
    end
  end
end
