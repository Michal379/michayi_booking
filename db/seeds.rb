# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Hotels
"Seeding..."
images = [
    "https://i.pinimg.com/564x/bd/55/60/bd55607bfbaa59ba5ffee1fe0f894fd1.jpg",
    "https://i.pinimg.com/236x/f1/98/fd/f198fd89f746e82b86dd4adfaedaced5.jpg",
    "https://i.pinimg.com/564x/f2/ec/ba/f2ecbaf94347329c813b01d9340b84a3.jpg",
    "https://i.pinimg.com/236x/f0/8f/75/f08f75c05a9d8cce3841a80be753a87b.jpg",
    "https://i.pinimg.com/236x/21/18/c1/2118c1f92f798b0af7613a7fecaf4bd9.jpg",
    "https://i.pinimg.com/236x/60/45/c8/6045c80c49fac59baf01d848a4c7083e.jpg",
    "https://i.pinimg.com/564x/84/ab/11/84ab1152f44e66353ffb99c0512a62df.jpg",
    "https://i.pinimg.com/236x/27/53/cc/2753ccb939d4099d19f9836c4e8eac57.jpg",
    "https://i.pinimg.com/564x/d5/22/39/d522392a5d96bbcbeae2403e67044924.jpg",
    "https://i.pinimg.com/236x/4c/0f/5a/4c0f5a2f375f605ef43ca3234aff05cf.jpg",
    "https://i.pinimg.com/564x/03/06/b0/0306b0b5494c99ee57a9e70483e92e5e.jpg",
    "https://i.pinimg.com/236x/1c/99/38/1c99389c2b9cfe99984110a101fe9cb3.jpg",
    "https://i.pinimg.com/236x/3d/58/f7/3d58f72822b062fc3638f4a02801283d.jpg",
    "https://i.pinimg.com/564x/26/ec/c3/26ecc3c46eb841486cf8863b07af083b.jpg",
    "https://i.pinimg.com/564x/e8/1d/cc/e81dcc8f21080a6f48ef1bf804f6c5d5.jpg",
    "https://i.pinimg.com/236x/4a/19/ac/4a19ac522ba0bf3b77ff972fd5c95a26.jpg",
    "https://i.pinimg.com/236x/d5/22/39/d522392a5d96bbcbeae2403e67044924.jpg",
    "https://i.pinimg.com/564x/24/77/56/247756aa3ae887526df6e7ad5e3b90b6.jpg",
    "https://i.pinimg.com/236x/12/f4/ad/12f4ad5ea4ee48ded5b297b90db63067.jpg",
    "https://i.pinimg.com/236x/e9/8e/9d/e98e9de213aa75e16deb67ad05334e85.jpg"
]

20.times do
  Hotel.create(
    name: Faker::Company.name,
    address: Faker::Address.full_address,
    description: Faker::Lorem.paragraph,
    amenities: Faker::Lorem.words(number: 4).join(", "),
    image: images.sample,
    rating: rand(1..5)
  )
end

# users
10.times do
  user = User.new(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: 'Password123!',
    phone_number: Faker::Number.number(digits: rand(7..10)),
    age: Faker::Number.between(from: 18, to: 90),
    nationality: Faker::Nation.nationality
  )
  user.save!
end

# rooms
15.times do
  room = Room.new
  room.hotel = Hotel.all.sample  
  room.type = %w[Single Double Family Royal Suite].sample 
  room.capacity = Faker::Number.between(from: 1, to: 20)  
  
  # Assign a random price based on the room type 
  case room.type
  when 'Single'
    room.price = Faker::Number.between(from: 100, to: 500)
  when 'Double'
    room.price = Faker::Number.between(from: 500, to: 1000)
  when 'Family'
    room.price = Faker::Number.between(from: 10000, to: 18000)
  when 'Royal Suite'
    room.price = Faker::Number.between(from: 18000, to: 25000)
  end

  room.save
end

"Done seeding ..."
