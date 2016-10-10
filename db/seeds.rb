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
track1 = Track.create(title: "Moonlight Sonato" , description: "Classical", author_id: user1[0].id);
track2 = Track.create(title: "Over The Rainbow" , description: "Wizard of oz song", author_id: user1[0].id);
track3 = Track.create(title: "Happy Birthday" , description: "Best day ever!", author_id: user1[0].id);
track4 = Track.create(title: "Jingle Bells" , description: "Christmas Cheer", author_id: user1[0].id);
track5 = Track.create(title: "Happy Birthday" , description: "Best day ever!", author_id: user1[0].id);
track6 = Track.create(title: "Happy Birthday" , description: "Best day ever!", author_id: user1[0].id);
track7 = Track.create(title: "Happy Birthday" , description: "Best day ever!", author_id: user1[0].id);
track8 = Track.create(title: "Happy Birthday" , description: "Best day ever!", author_id: user1[0].id);

file1 = File.open("/Users/Appacademy/desktop/sound-byte/app/assets/images/Default_Fannie.png")
file2 = File.open("/Users/Appacademy/desktop/sound-byte/app/assets/images/fannie.jpeg")
track1.album_image = file2
track2.album_image = file2
track1.save
track2.save
track3.save

user1[0].image = file1
user1[0].save!
