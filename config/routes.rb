Rails.application.routes.draw do
  resources :reservations
  resources :reviews
  resources :rooms
  resources :users
  resources :hotels
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
