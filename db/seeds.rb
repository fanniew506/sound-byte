# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

user1 = User.create(username: "fannie", password: "starwars"),
user2 = User.create(username: "amy", password: "starwars"),

Track.destroy_all
track1 = user1[0].tracks.new(title: "Moonlight Sonato" , description: "Classical", author_id: user1[0].id);
track2 = user1[0].tracks.new(title: "Over The Rainbow" , description: "Wizard of oz song", author_id: user1[0].id);
track1.save
track2.save
