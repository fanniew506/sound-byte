json.set! 'comments' do
  json.array!(@remarks) do |remark|
      json.partial! 'api/remarks/partial.json.jbuilder', remark: remark
  end
end
json.set! 'track' do
json.extract! @track, :id, :title, :description, :album_image_url, :author_id, :author_name, :author_image_url, :audio_url, :created_at
end
