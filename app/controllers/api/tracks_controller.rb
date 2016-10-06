class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
    @track.author_id = current_user.id
    if @track.save
      render json: @track
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def update
    @track = Track.find(params[:id])
    @track.update(track_params)
    if @track.save
      render json: @track
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def show
  end

  def destroy
  end

  def index
  end

  private
  def track_params
    params.require(:user).permit(:username, :password, :avatar)
  end
end
