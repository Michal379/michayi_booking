class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :age
      t.string :nationality
      t.string :password
      t.integer :phone_number
      t.string :booking_history

      t.timestamps
    end
  end
end
