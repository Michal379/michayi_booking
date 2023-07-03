class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.belongs_to :hotel, null: false, foreign_key: true
      t.belongs_to :room, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :check_in
      t.integer :check_out
      t.string :guest_name

      t.timestamps
    end
  end
end
