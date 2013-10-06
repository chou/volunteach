class RootController < ApplicationController

  def root
    puts "THE CURRENT USER IS"
    p current_user
    @current_user = current_user
    respond_to do |format|
      format.html
      format.json { render "root.rabl", :head => :ok }
    end
  end
  
end
