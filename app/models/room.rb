class Room < ApplicationRecord
    belongs_to :hotel

    validates :type, inclusion: { in: %w[Single Double Family Royal Suite] }
    validates :capacity, numericality: { greater_than_or_equal_to: 1 }
    

end
