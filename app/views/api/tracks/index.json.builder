json.tracks do
  @tracks.each do |track| {
    json.set! json.id, json.title, json.description, json.author_id
  }
