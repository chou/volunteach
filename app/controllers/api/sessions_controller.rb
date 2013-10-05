class Api::SessionsController < ApplicationController
  def create
    unless params[:user][:facebook] == "facebook"
      login(params[:user][:email], params[:user][:password])
    else
      fb_login(params[:user][:access_token])
    end
    render text: "Successfully logged in!" if logged_in?
    render text: "Did not log in" unless logged_in?
  end

  def destroy
    logout
    render text: "Successfully logged out!" unless logged_in?
    render text: "Error in logging out." if logged_in?
  end
end
