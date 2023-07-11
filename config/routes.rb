Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :tasks, only: :index, param: :slug

  root "home#index"
  get '*path', to: 'home#index', via: :all
end
