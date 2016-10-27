Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :update, :show] do
      resources :tracks, only: [:index]
    end
    resources :tracks, only: [:create, :update, :show, :destroy, :index, :latest] do
      resources :remarks, only: [:create, :update, :destroy, :index]
    end
    resource :session, only: [:create, :destroy]

  end

end
