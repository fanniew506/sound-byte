json.@tracks do |track|
  json.id track.id
  json.title track.title
  json.author_id track.author_id
  json.image_url asset_path(track.image.url(:original))
end
