json.track do
  json.id @track.id
  json.title @track.title
  json.image_url asset_path(@track.image.url(:original))
end
