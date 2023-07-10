class User < ApplicationRecord
  has_many :reservations
  has_many :reviews

  has_secure_password

  validates :nationality, presence: true
  validates :name, presence: true, length: { minimum: 2 }
  validates :email, presence: true, length: { minimum: 5 }, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'must be a valid email address' }
  validates :password, presence: true, length: { minimum: 5 }, format: { with: /\A(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*\z/, message: 'must be at least 5 characters long and contain a combination of letters, numbers, and symbols' }
  validates :phone_number, presence: true, length: { minimum: 7 }
end
