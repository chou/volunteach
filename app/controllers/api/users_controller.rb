class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      render :show, status: :ok
    else
      render @user.errors, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(params[:user])
    @user.topic_ids = params[:user][:topic_ids]
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render true, status: :ok
  end
end
