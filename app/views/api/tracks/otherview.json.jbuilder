json.set! 'tracks' do
  @tracks.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track.json.jbuilder', track: track
    end
  end
end
json.set! 'user' do
  json.extract! @user, :id, :username, :image_url
end
