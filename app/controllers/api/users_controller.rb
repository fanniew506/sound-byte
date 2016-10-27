class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in_user!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @tracks = Track.all
    render 'api/users/latest_tracks'
  end

  def show

  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
