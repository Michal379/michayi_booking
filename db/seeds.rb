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
    "https://lh3.googleusercontent.com/p/AF1QipOlzKBumFJzUKHe1OLVSOhxLBCWd4JWFRuxpsyY=w296-h202-n-k-rw-no-v1",
    "https://lh3.googleusercontent.com/gps-proxy/AF-Tc0SE8OJy7-I5oaheXJOp_gXdZyxO1pAQdHtVQeZjHiJBU3yzGnNXtBgGlModQ16cd4Oq6t8SEb0Uqa1VWjfCjUBpyC0mHqsOiJdq5pOeYUXBaLobZY2BUgwhaHE3CJwhindU-xC7gE86AZJ9c7s-WlUD8f_9rxO8_rMqfLPCqq6KdKxVfGbC_Ds=w296-h202-n-k-rw-no-v1",
    "https://lh3.googleusercontent.com/gps-proxy/AF-Tc0Q6D9RGSetgzAAFENhOcwiRsr4oPDTHz1SNygXzEl0E8n3T8OAb2rf3GlLBc7y-vLxc_RPjI7s-bxhDxy46wt4pENAfEKq8biOFNdKC-rQTzTQshJXpOV7yPDIn2a5Swkr9I06LrG6QI_N6rSWqZ7j0FRpUK7-GSu1A-tR0LN2FUi7Bdth5m8AA=w296-h202-n-k-rw-no-v1",
    "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/52/91/529192408.jpeg",
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


names = [
  'Crown Plaza', 'Raddison Blu Hotel', 'The Sarova Stanley', 'Best Western', 'Ibis Styles',
  'Royal Tulip', 'Swiss Lenana', 'Hilton Inn', 'The Heron Portico', 'Turtle Bay',
  'The Backpackers', 'Ole Sereni', 'Kingfisher Casa', 'Panafric', 'The Emory',
  'The Fairview', 'Tamarind Tree Hotel', 'Cocord Hotel', 'Weston', 'La Mada'
]

amenities = ['swimming pool', 'parking', 'strong Wi-Fi', 'gym']
addresses = ['Nairobi', 'Nakuru', 'Mombasa', 'Naivasha', 'Kisumu']

20.times do
  name = names.delete_at(rand(names.length))
  address = addresses.sample

  hotel = Hotel.create(
    name: name,
    address: address,
    description: Faker::Lorem.paragraph,
    amenities: amenities.sample(rand(1..4)).join(", "),
    image: images.sample,
    rating: rand(3..5)
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

room_types = %w[Single Double Family Deluxe Royal]

# Iterate through each hotel
Hotel.all.each do |hotel|
  # Shuffle the room types array to randomize the types assigned to the hotel
  shuffled_room_types = room_types.shuffle

  # Assign three random room types to the hotel
  3.times do
    room = Room.new
    room.hotel = hotel
    room.type = shuffled_room_types.pop

    # Assign a random price and capacity based on the room type
    case room.type
    when 'Single'
      room.price = Faker::Number.between(from: 1000, to: 8000)
      room.capacity = Faker::Number.between(from: 1, to: 4)
    when 'Double'
      room.price = Faker::Number.between(from: 10000, to: 20000)
      room.capacity = Faker::Number.between(from: 2, to: 20)
    when 'Family'
      room.price = Faker::Number.between(from: 20000, to: 30000)
      room.capacity = Faker::Number.between(from: 4, to: 20)
    when 'Deluxe'
      room.price = Faker::Number.between(from: 30000, to: 50000)
      room.capacity = Faker::Number.between(from: 3, to: 20)
    when 'Royal'
      room.price = Faker::Number.between(from: 50000, to: 80000)
      room.capacity = Faker::Number.between(from: 3, to: 10)
    end

    room.save
  end

  # Assign the remaining room types to the hotel
  shuffled_room_types.each do |room_type|
    room = Room.new
    room.hotel = hotel
    room.type = room_type
    room.capacity = Faker::Number.between(from: 1, to: 20)

    # Assign a random price and capacity based on the room type
    case room.type
    when 'Single'
      room.price = Faker::Number.between(from: 1000, to: 8000)
      room.capacity = Faker::Number.between(from: 1, to: 4)
    when 'Double'
      room.price = Faker::Number.between(from: 10000, to: 20000)
      room.capacity = Faker::Number.between(from: 2, to: 20)
    when 'Family'
      room.price = Faker::Number.between(from: 20000, to: 30000)
      room.capacity = Faker::Number.between(from: 4, to: 20)
    when 'Deluxe'
      room.price = Faker::Number.between(from: 30000, to: 50000)
      room.capacity = Faker::Number.between(from: 3, to: 20)
    when 'Royal'
      room.price = Faker::Number.between(from: 50000, to: 80000)
      room.capacity = Faker::Number.between(from: 2, to: 10)
    end

    room.save
  end
end




"Done seeding ..."
