class Api::TracksController < ApplicationController

  def create
    author = current_user
    @track = author.tracks.new(track_params)
    if @track.save
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def update
    @track = Track.find(params[:id])
    @track.update(track_params)
    if @track.save
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def show
    @track = Track.find(params[:id])
    if @track
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def destroy
    @track = Track.find(params[:id])
    if @track.destroy
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def index
  end

  private
  def track_params
    params.require(:user).permit(:username, :password, :avatar)
  end
end
