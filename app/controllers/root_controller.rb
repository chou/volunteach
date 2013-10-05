class RootController < ApplicationController

  def root
    @current_user = current_user
    respond_to do |format|
      format.html
      format.json { render :handlers => [:rabl], head => :ok }
    end
  end
  
end
