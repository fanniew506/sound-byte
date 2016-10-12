class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :log_out_user!, :log_in_user!, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
    debugger
  end

  def log_out_user!(user)
    debugger
    user.reset_session_token
    session[:session_token] = nil
  end

  def log_in_user!(user)
    session[:session_token] = user.reset_session_token
    debugger
  end

  def logged_in?
    !!current_user
  end

end
