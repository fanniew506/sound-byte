class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in_user!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Credentials"], status: 404
    end
  end

  def destroy
    @user = current_user
    if @user.nil?
      render json: ["Not logged in"], status: 404
    else
      log_out_user!(@user)
      render 'api/users/show'
    end
  end
end
