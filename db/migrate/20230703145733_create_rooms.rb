class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.string :hotel_id
      t.string :type
      t.integer :capacity
      t.integer :price

      t.timestamps
    end
  end
end
