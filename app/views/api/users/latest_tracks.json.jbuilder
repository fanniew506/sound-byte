@tracks.each do |track|
  json.set! track.id do
    json.partial! 'api/tracks/track.json.jbuilder', track: track
  end
end
