# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
images = [
    "https://i.pinimg.com/564x/15/f2/16/15f21627d01bed18837284f73c0f4d4f.jpg",
    "https://i.pinimg.com/236x/f1/98/fd/f198fd89f746e82b86dd4adfaedaced5.jpg",
    "https://i.pinimg.com/564x/f2/ec/ba/f2ecbaf94347329c813b01d9340b84a3.jpg",
    "https://i.pinimg.com/564x/2a/52/21/2a522170cce01d62521502a3bd0a5bc6.jpg",
    "https://i.pinimg.com/236x/21/18/c1/2118c1f92f798b0af7613a7fecaf4bd9.jpg",
    "https://i.pinimg.com/236x/94/36/9c/94369cc71968852fe2cd332be6ac414f.jpg",
    "https://i.pinimg.com/564x/84/ab/11/84ab1152f44e66353ffb99c0512a62df.jpg",
    "https://i.pinimg.com/236x/27/53/cc/2753ccb939d4099d19f9836c4e8eac57.jpg",
    "https://i.pinimg.com/564x/d5/22/39/d522392a5d96bbcbeae2403e67044924.jpg",
    "https://i.pinimg.com/236x/4c/0f/5a/4c0f5a2f375f605ef43ca3234aff05cf.jpg",
    "https://i.pinimg.com/564x/03/06/b0/0306b0b5494c99ee57a9e70483e92e5e.jpg",
    "https://i.pinimg.com/236x/1c/99/38/1c99389c2b9cfe99984110a101fe9cb3.jpg",
    "https://i.pinimg.com/236x/3d/58/f7/3d58f72822b062fc3638f4a02801283d.jpg",
    "https://i.pinimg.com/236x/4e/b6/74/4eb67457d8a0a21e00ab016adc9a449f.jpg",
    "https://i.pinimg.com/564x/e8/1d/cc/e81dcc8f21080a6f48ef1bf804f6c5d5.jpg",
    "https://i.pinimg.com/236x/4a/19/ac/4a19ac522ba0bf3b77ff972fd5c95a26.jpg",
    "https://i.pinimg.com/236x/d5/22/39/d522392a5d96bbcbeae2403e67044924.jpg",
    "https://i.pinimg.com/564x/24/77/56/247756aa3ae887526df6e7ad5e3b90b6.jpg",
    "https://i.pinimg.com/236x/97/54/bb/9754bbdef0f27f57b8f65ec5a3d206d1.jpg",
    "https://i.pinimg.com/236x/48/42/5c/48425cdf264f3d54bf32b48ebead7e87.jpg"
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

"Done seeding ..."
