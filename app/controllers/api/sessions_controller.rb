class Api::SessionsController < ApplicationController
  def create
    unless params[:user][:facebook] == "facebook"
      login(params[:user][:email], params[:user][:password])
    else
      fb_login(params[:user][:access_token])
    end
    if logged_in?
      render "users/show", status: :ok
    else
      render false, status: :unprocessable_entity
    end
  end

  def destroy
    logout
    unless logged_in?
      render true, status: :ok
    else
      render false, status: :unprocessable_entity
    end
  end
end
