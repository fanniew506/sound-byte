@remarks.each do |remark|
  json.set! remark.id do
    json.partial! 'api/remarks/remark.json.jbuilder', remark: remark
  end
end
