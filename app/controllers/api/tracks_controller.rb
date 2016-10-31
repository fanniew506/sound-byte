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
    @tracks = Track.all
    render 'api/tracks/index.json.jbuilder'
  end

  private
  def track_params
    params.require(:track).permit(:title, :author_id, :description, :album_image, :audio)
  end
end
