json.remark do
  json.id @remark.id
  json.body @remark.body
  json.track_id @remark.track_id
  json.author_id @remark.track_id
  json.author_image_url @remark.user.image_url
  json.author_name @remark.user.username
end
