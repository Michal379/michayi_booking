class CreateHotels < ActiveRecord::Migration[7.0]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :address
      t.string :description
      t.string :amenities
      t.string :image

      t.timestamps
    end
  end
end
