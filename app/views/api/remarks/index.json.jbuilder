@remarks.each do |remark|
  json.set! remark.id do
    json.partial! 'api/remarks/partial.json.jbuilder', remark: remark
  end
end
