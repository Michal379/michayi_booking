class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.belongs_to :hotel, null: false, foreign_key: { dependent: :destroy } # Add dependent: :destroy option
      t.string :type
      t.integer :capacity
      t.integer :price

      t.timestamps
    end
  end
end
