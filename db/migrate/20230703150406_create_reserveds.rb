class CreateReserveds < ActiveRecord::Migration[7.0]
  def change
    create_table :reserveds do |t|
      t.belongs_to :hotel, null: false, foreign_key: true
      t.belongs_to :room, null: false, foreign_key: true
      t.integer :check_in
      t.integer :check_out

      t.timestamps
    end
  end
end
