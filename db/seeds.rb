# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

picture1 = "http://s3.amazonaws.com/sound-byte-dev/tracks/album_images/000/000/010/original/2.jpg?1476219428"
audio1 = "http://s3.amazonaws.com/sound-byte-dev/tracks/audios/000/000/009/original/mpthreetest.mp3?1476221533"
User.destroy_all

user1 = User.create(username: "fannie", password: "starwars", image: picture1),
user2 = User.create(username: "amy", password: "starwars", image: picture1),

Track.destroy_all
track1 = Track.create(title: "Moonlight Sonato" , description: "Classical", author_id: user1[0].id, album_image: picture1, audio: audio1);
track2 = Track.create(title: "Over The Rainbow" , description: "Wizard of oz song", author_id: user1[0].id, album_image: picture1, audio: audio1);
track3 = Track.create(title: "Happy Birthday" , description: "Best day ever!", author_id: user1[0].id, album_image: picture1, audio: audio1);
track4 = Track.create(title: "Jingle Bells" , description: "Christmas Cheer", author_id: user1[0].id, album_image: picture1, audio: audio1);
track5 = Track.create(title: "Cool Jazz" , description: "=)!", author_id: user1[0].id, album_image: picture1, audio: audio1);
track6 = Track.create(title: "Hip Hop Jamz" , description: "Very Cool stuff", author_id: user1[0].id, album_image: picture1, audio: audio1);
