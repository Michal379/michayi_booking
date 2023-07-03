class Reservation < ApplicationRecord
  belongs_to :hotel
  belongs_to :room
  belongs_to :user
end
