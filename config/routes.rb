Rails.application.routes.draw do

  root to: 'application#angular'

  resources :posts, only: [:create, :index, :show] do
    member do
      put '/upvote' => 'posts#upvote'
    end

    resources :comments, only: [:show, :create] do
      member do
        put '/upvote' => 'comments#upvote'
      end
    end
  end
end
