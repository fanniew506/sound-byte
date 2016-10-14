# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

user1 = User.create(username: "jennifer", password: "starwars", image: "http://static1.squarespace.com/static/55ad450ce4b00f4c52d6401e/55ed7b2de4b055e3b16b1912/55ed7b3be4b055e3b16b1cbc/1440147816000/V2-Christian-Webb-Photo-Headshots.jpg?format=original"),
user2 = User.create(username: "marie", password: "starwars", image: "https://s-media-cache-ak0.pinimg.com/originals/cb/8b/be/cb8bbe37a7e5e3b742a1777edab68064.jpg"),
user3 = User.create(username: "tawny", password: "starwars", image: "https://cdn.fstoppers.com/styles/full/s3/lead/2015/05/fstoppers-shooting-cinematic-headshots-indoors-dylan-patrick-6_0.jpg"),
user4 = User.create(username: "amy", password: "starwars", image: "http://cdn.picturecorrect.com/wp-content/uploads/2013/11/modern-corporate-headshot-technique-3.jpg"),
user5 = User.create(username: "joseph", password: "starwars", image: "http://www.mackephotography.com/headshots/men/0_medium.jpg"),
user6 = User.create(username: "marco", password: "starwars", image: "https://s-media-cache-ak0.pinimg.com/originals/f4/9b/2a/f49b2a61a53c74a626b212b122463aa4.jpg"),
user7 = User.create(username: "corbin", password: "starwars", image: "http://www.colemanphotographix.com/wp-content/uploads/MensHeadshot-0020.jpg"),
user8 = User.create(username: "dominic", password: "starwars", image: "http://www.mackephotography.com/headshots/men/32_medium.jpg"),

audio1 = "http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3"
audio2 = "http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2004.mp3"
audio3 = "http://www.stephaniequinn.com/Music/Pachelbel%20-%20Canon%20in%20D%20Major.mp3"
audio4 = "http://www.stephaniequinn.com/Music/Handel%20-%20Entrance%20of%20the%20Queen%20of%20Sheba.mp3"
audio5 = "http://www.stephaniequinn.com/Music/Hungarian%20Dance.mp3"
audio6 = "http://www.stephaniequinn.com/Music/Jazz%20Rag%20Ensemble%20-%2010.mp3"
audio7 = "http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2004.mp3"
audio8 = "http://www.stephaniequinn.com/Music/Vivaldi%20-Largo%20from%20Four%20Seasons.mp3"
audio9 = "http://www.stephaniequinn.com/Music/Mozart%20-%20Presto.mp3"
audio10 = "http://www.stephaniequinn.com/Music/Rondeau.mp3"
audio11 = "http://www.stephaniequinn.com/Music/Mouret%20-%20Rondeau.mp3"
audio12 = "http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2002.mp3"

picture1 = "http://www.happydesigner.co.uk/wp-content/uploads/2011/01/dj-album-cover-1024x1024.jpg"
picture2 = "http://blog.nextdayflyers.com/wp-content/uploads/2011/03/ArtDesignImage14.jpg"
picture3 = "http://www.designformusic.com/wp-content/uploads/2016/05/continuum-trailer-music-album-cover-design.jpg"
picture4 = "http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-16.jpg"
picture5 = "https://www.smashingmagazine.com/images/music-cd-covers/64.jpg"
picture6 = "http://dominey.me/storage/cache/images/custom/ednastern-jpg/medium_large.1449437836.jpg"
picture7 = "http://www.music-bazaar.com/album-images/vol1009/511/511011/2344877-big/The-Greatest-Mozart-Collection-Ever-Made-CD3-cover.jpg"
picture8 = "http://assets.classicfm.com/2013/28/louis-lortie-beethoven-1373905890.jpg"
picture9 = "https://s-media-cache-ak0.pinimg.com/originals/b5/ec/77/b5ec77e69e3f1d2a1eedabfeed219cb5.jpg"
picture10 = "http://66.media.tumblr.com/55bdf411799b66cf7061ea2601f3d0ed/tumblr_nac7d0Qsgs1tuk7i7o1_1280.jpg"
picture11 = "http://1.bp.blogspot.com/_rLdX4QsMbn4/TFdYTUxKArI/AAAAAAAAASI/9n-zrtuP6bo/s1600/Balmorhea+-+All+Is+Wild,+All+It+Silent.jpg"
picture12 = "http://is5.mzstatic.com/image/thumb/Music3/v4/89/16/10/891610ea-8c80-f0c2-816e-9fb9a8406d86/source/600x600bb.jpg"

Track.destroy_all
Track.create(title: "Moonlight Sonato" , description: "No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. ", author_id: 1, album_image: picture1, audio: audio1);
Track.create(title: "Over The Rainbow" , description: "Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had. ", author_id: 1, album_image: picture2, audio: audio2);
Track.create(title: "Happy Birthday" , description: "For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention.", author_id: 1, album_image: picture3, audio: audio3);
Track.create(title: "Jingle Bells" , description: "Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far. At principle perfectly by sweetness do. As mr started arrival subject by believe.", author_id: 1, album_image: picture4, audio: audio4);
Track.create(title: "Cool Jazz" , description: "Fully begin on by wound an. Girl rich in do up or both. At declared in as rejoiced of together. He impression collecting delightful unpleasant by prosperous as on. End too talent she object mrs wanted remove giving.
", author_id: 1, album_image: picture5, audio: audio5);
Track.create(title: "Blue Skies" , description: "Same an quit most an. Admitting an mr disposing sportsmen. Tried on cause no spoil arise plate. Longer ladies valley get esteem use led six.", author_id: 2, album_image: picture6, audio: audio6);
Track.create(title: "Love Song" , description: "Middletons resolution advantages expression themselves partiality so me at. West none hope if sing oh sent tell is. ", author_id: 2, album_image: picture7, audio: audio7);
Track.create(title: "Yellow Brick Road" , description: "Cause dried no solid no an small so still widen. Ten weather evident smiling bed against she examine its. Rendered far opinions two yet moderate sex striking.", author_id: 3, album_image: picture8, audio: audio8);
Track.create(title: "Roxanne" , description: "Sufficient motionless compliment by stimulated assistance at. Convinced resolving extensive agreeable in it on as remainder. ", author_id: 3, album_image: picture9, audio: audio9);
Track.create(title: "Straight Out of Mordor" , description: " Cordially say affection met who propriety him. Are man she towards private weather pleased.", author_id: 4, album_image: picture10, audio: audio10);
Track.create(title: "New Kids In Town" , description: "Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity. ", author_id: 4, album_image: picture11, audio: audio11);
Track.create(title: "Call Me Maybe" , description: "Delay rapid joy share allow age manor six. Went why far saw many knew. ", author_id: 5, album_image: picture12, audio: audio12);
Track.create(title: "The Only One" , description: " Exquisite excellent son gentleman acuteness her. Do is voice total power mr ye might round still. ", author_id: 5, album_image: picture12, audio: audio12);
Track.create(title: "Scripts" , description: " He impression collecting delightful unpleasant by prosperous as on. End too talent she object mrs wanted remove giving. ", author_id: 5, album_image: picture1, audio: audio1);

Remark.destroy_all

Remark.create(body: "I love this one!", author_id: 2, track_id: 1)
Remark.create(body: "This is amazing.", author_id: 8, track_id: 1)
Remark.create(body: "More please", author_id: 7, track_id: 1)
Remark.create(body: "Check out my tracks", author_id: 2, track_id: 2)
Remark.create(body: "Would love to hear more tracks like this.", author_id: 2, track_id: 2)
Remark.create(body: "How did you do this?", author_id: 3, track_id: 2)
Remark.create(body: "this is great", author_id: 2, track_id: 3)
Remark.create(body: "I would love to cover this", author_id: 6, track_id: 3)
Remark.create(body: "lets do a cover together!", author_id: 7, track_id: 3)
Remark.create(body: "I love this", author_id: 4, track_id: 3)
Remark.create(body: "Can def jam out to this", author_id: 1, track_id: 3)
Remark.create(body: "cool song", author_id: 3, track_id: 4)
Remark.create(body: "Great original", author_id: 8, track_id: 4)
Remark.create(body: "This is not bad at all", author_id: 2, track_id: 5)
Remark.create(body: "great upload", author_id: 3, track_id: 5)
Remark.create(body: "Cant wait to hear more from you", author_id: 6, track_id: 6)
Remark.create(body: "You are definitly one to watch for!", author_id: 5, track_id: 6)
Remark.create(body: "Youre gonna be famous one day", author_id: 7, track_id: 6)
Remark.create(body: "you got skills", author_id: 1, track_id: 7)
Remark.create(body: "super cool", author_id: 2, track_id: 7)
Remark.create(body: "Rreally original", author_id: 1, track_id: 7)
Remark.create(body: "super fresh", author_id: 2, track_id: 8)
Remark.create(body: "check out my latest upload!", author_id: 7, track_id: 9)
Remark.create(body: "Hello from singapore!", author_id: 4, track_id: 10)
Remark.create(body: "Love your music!", author_id: 2, track_id: 11)
Remark.create(body: "Im a fan", author_id: 4, track_id: 11)
Remark.create(body: "Check my tracks out!", author_id: 6, track_id: 12)
Remark.create(body: "That was so cool", author_id: 8, track_id: 12)
