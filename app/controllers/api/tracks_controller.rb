class Api::TracksController < ApplicationController

  def create
    author = current_user
    render json: ["Not Logged In"] if author.nil?
    @track = author.tracks.new(track_params)
    if @track.save
      render 'api/tracks/show.json.jbuilder'
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def update
    @track = Track.find(params[:id])
    @track.update(track_params)
    if @track.save
      render 'api/tracks/show.json.jbuilder'
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def show
    @track = Track.find(params[:id])
    if @track
      @remarks = @track.remarks
      render 'api/tracks/show.json.jbuilder'
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def destroy
    @track = Track.find(params[:id])
    if @track.destroy
      render 'api/tracks/show.json.jbuilder'
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  def index
    user = current_user
    if user.nil?
      render json: {}
    else
      @tracks = user.tracks
      render '/api/tracks/index'
    end
  end

  private
  def track_params
    params.require(:track).permit(:title, :author_id, :description, :album_image, :audio)
  end
end
