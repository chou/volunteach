class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:user_id])
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      render :show, status: :ok
    else
      render @user.errors, status: :unprocessable_entity
    end
  end

  # def update

  #   @user = User.find(params[:user_id])
  #   User.transaction do
  #     @user.update_attributes(params[:user])


  #   end
  # end

  def destroy
  end
end
