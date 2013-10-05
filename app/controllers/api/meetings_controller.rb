class Api::MeetingsController < ApplicationController

  def create
    user = User.find_closest(params[:user][:location])
  end

  def destroy

  end
end
