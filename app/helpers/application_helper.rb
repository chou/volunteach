module ApplicationHelper
  def current_user
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def login(email, password)
      if u = User.authenticate_by_credentials(email, password)
        session[:token] = u.reset_session_token!
      else
        session[:token] = ""
      end
  end

  def fb_login(access_token)
      if u = User.authenticate_by_facebook(access_token)
        session[:token] = u.reset_session_token!
      else
        session[:token] = ""
      end
  end

  def logged_in?
    !!current_user
  end

  def logout
    session[:token] = ""
    current_user.reset_session_token!
  end
end
