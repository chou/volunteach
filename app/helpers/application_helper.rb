module ApplicationHelper
  def current_user
    return nil if session[:token].nil?
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def current_user_info
    current_user.attributes.reject do |key, value|
      key == "password_digest" || key == "session_token"
    end
  end

  def login(email, password)
      if u = User.authenticate_by_credentials(email, password)
        session[:token] = u.reset_session_token!
      else
        session[:token] = nil
      end
  end

  def fb_login(access_token)
      if u = User.authenticate_by_facebook(access_token)
        session[:token] = u.reset_session_token!
      else
        session[:token] = nil
      end
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:token] = nil
  end
end
