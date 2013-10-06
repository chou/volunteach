class Api::RatesController < ApplicationController
	def create
		if u = User.find_by_id(params[:user_id])
			u.add_rating!(params[:rating])
			render :text => "", status: :ok
		else
			render :text => "", status: :unprocessable_entity
		end
	end
end
