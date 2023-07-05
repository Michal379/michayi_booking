Rails.application.routes.draw do
  resources :reservations
  resources :reviews
  resources :rooms
  resources :users
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  resources :hotels, only: [:index, :show] 
  # get '/hotels', to: 'hotels#index'
  # get '/hotels/:id', to: 'hotels#show'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
