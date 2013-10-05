class Api::MeetingsController < ApplicationController

  def create
    nearest_tutor = User.find_closest(params[:user][:lat], params[:user][:lng])

    @meeting = Meeting.create(tutor_id: nearest_tutor.id,
    student_id: current_user.id, topic_id: params[:topic_id])
    render :show
  end


  def destroy

  end
end
