json.user do
  json.id @user.id
  json.username @user.username
  json.image_url @user.image.url
end
