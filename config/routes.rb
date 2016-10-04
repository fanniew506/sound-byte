Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:create, :update, :show, :destroy, :index] do
      resources :comments, only: [:create, :destroy, :index]
    end
  end

end
