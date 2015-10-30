Rails.application.routes.draw do

  root to: 'application#angular'

  resources :posts, only: [:create, :index, :show] do
    resources :comments, only: [:show, :create]
  end

end
