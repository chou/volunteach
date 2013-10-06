class Api::MeetingsController < ApplicationController

  def create
    current_user.update_attributes(params[:user])
    if nearest_tutor = current_user.
      find_closest_available_tutor(params[:topic_id])
      @meeting = Meeting.create(tutor_id: nearest_tutor.id,
      student_id: current_user.id, topic_id: params[:topic_id])
      render :show
    else
      render :json => {message: "No tutor found. Perhaps you should try teaching this subject?"}
    end
  end


  def destroy
    meeting = Meeting.find(params[:id])
    meeting.destroy
    render :json => meeting
  end
end
