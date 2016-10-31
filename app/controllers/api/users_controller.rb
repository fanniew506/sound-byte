require 'byebug'

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
    @user = User.find(params[:user][:id])
    render json: ["Error user cannot be found"], status: 404 if @user.nil?
    if @user.update({image: params[:user][:image]})
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    @tracks = @user.tracks
    if @user
      render 'api/users/profile_view.json.jbuilder'
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :image)
  end
end
