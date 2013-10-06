TuberApp::Application.routes.draw do
  root to: "root#root"

  namespace :api, defaults: {format: "json"} do
    resources :users, only: [:show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :topics, only: [:index, :show]
    resources :meetings, only: [:create, :destroy]
    post "rate", to: "Rates#create"
  end

  get "*path", to: redirect { |params| "/#/#{URI.decode params[:path]}" }

end
