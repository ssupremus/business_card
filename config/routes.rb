# frozen_string_literal: true

Rails.application.routes.draw do
  root 'index#index'

  namespace :api do
    namespace :v1 do
      resources :skills
    end
  end

  get '*path', to: 'index#index', via: :all
end
