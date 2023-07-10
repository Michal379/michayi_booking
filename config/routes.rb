Rails.application.routes.draw do
  resources :reservations
  resources :reviews

  resources :hotels

  # rooms
  resources :rooms
  post '/sessions/rooms/:id/select_room', to: 'sessions#select_room'
  get '/sessions/rooms/get_selected_room', to: 'sessions#get_selected_room'
  
  # Add the following route for fetching rooms of a specific hotel
  get '/hotels/:hotelId/rooms', to: 'rooms#hotel_rooms'

  # users routes
  resources :users
  post '/signin', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :hotels, only: [:index, :show] 

  # Routes accessible only to admin users
get '/admin/hotels', to: 'hotels#index'
post '/admin/hotels', to: 'hotels#create'
put '/admin/hotels/:id', to: 'hotels#update'
delete '/admin/hotels/:id', to: 'hotels#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
