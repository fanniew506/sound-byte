Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :update] do
      resources :tracks, only: [:create, :update, :show, :destroy, :index] do
        resources :remarks, only: [:create, :update, :destroy, :index]
      end
    end
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index]
  end

end
