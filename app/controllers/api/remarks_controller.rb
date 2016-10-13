class Api::RemarksController < ApplicationController
  def create
    track = Track.find(params[:track_id])
    user = current_user
    @remark = Remark.new({body: params[:body]})
    @remark.author_id = user.id
    @remark.track_id = track.id
    if @remark.save
      render json: @remark
    else
      render json: @remark.errors.full_messages
    end
  end

  def update
  end

  def index
    track = Track.find(params[:id])
    @remarks = track.remarks
    render 'api/remarks/index'
  end

  def destroy
    @remark = Remark.find(params[:track_id])
    @remark.destroy
      render json: @remark
  end

  private
  def remark_params
    params.require(:remark).permit(:body)
  end

end
