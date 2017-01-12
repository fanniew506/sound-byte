# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

user1 = User.create(username: "Jennifer", password: "starwars", image: "http://static1.squarespace.com/static/55ad450ce4b00f4c52d6401e/55ed7b2de4b055e3b16b1912/55ed7b3be4b055e3b16b1cbc/1440147816000/V2-Christian-Webb-Photo-Headshots.jpg?format=original")
user2 = User.create(username: "Marie", password: "starwars", image: "https://s-media-cache-ak0.pinimg.com/originals/cb/8b/be/cb8bbe37a7e5e3b742a1777edab68064.jpg")
user3 = User.create(username: "Tawny", password: "starwars", image: "https://cdn.fstoppers.com/styles/full/s3/lead/2015/05/fstoppers-shooting-cinematic-headshots-indoors-dylan-patrick-6_0.jpg")
user4 = User.create(username: "Amy", password: "starwars", image: "http://cdn.picturecorrect.com/wp-content/uploads/2013/11/modern-corporate-headshot-technique-3.jpg")
user5 = User.create(username: "Joseph", password: "starwars", image: "http://www.mackephotography.com/headshots/men/0_medium.jpg")
user6 = User.create(username: "Marco", password: "starwars", image: "https://s-media-cache-ak0.pinimg.com/originals/f4/9b/2a/f49b2a61a53c74a626b212b122463aa4.jpg")
user7 = User.create(username: "Corbin", password: "starwars", image: "http://www.colemanphotographix.com/wp-content/uploads/MensHeadshot-0020.jpg")
user8 = User.create(username: "Dominic", password: "starwars", image: "http://www.mackephotography.com/headshots/men/32_medium.jpg")

audio1 = %Q[http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2012.mp3]
audio2 = %Q[http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2004.mp3]
audio3 = File.open('/Users/fanniewang/desktop/projects/sound-byte/app/assets/images/seeds/audio3.mp3')
audio4 = %Q[http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2007.mp3]
audio5 = %Q[http://www.stephaniequinn.com/Music/Mozart%20-%20Presto.mp3]
audio6 = File.open('/Users/fanniewang/desktop/projects/sound-byte/app/assets/images/seeds/audio6.mp3')
audio7 = File.open('/Users/fanniewang/desktop/projects/sound-byte/app/assets/images/seeds/audio7.mp3')
audio8 = File.open('/Users/fanniewang/desktop/projects/sound-byte/app/assets/images/seeds/audio8.mp3')
audio9 = File.open('/Users/fanniewang/desktop/projects/sound-byte/app/assets/images/seeds/audio9.mp3')
audio10 = File.open('/Users/fanniewang/desktop/projects/sound-byte/app/assets/images/seeds/audio10.mp3')
audio11 = File.open('/Users/fanniewang/desktop/projects/sound-byte/app/assets/images/seeds/audio11.mp3')
audio12 = File.open('/Users/fanniewang/desktop/projects/sound-byte/app/assets/images/seeds/audio12.mp3')

picture1 = %Q[http://redmp3.su/cover/481853-460x460/sing-sing-sing.jpg]
picture2 = %Q[http://http2.mlstatic.com/S_14783-MLB196107287_6871-O.jpg]
picture3 = %Q[http://img.discogs.com/ZIzcU4ipyKOdJ5pnQ9CeNM-yJ-s=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3471861-1449654834-4506.jpeg.jpg]
picture4 = %Q[http://www.dresscircle.com/1609-large_default/kurt-weill-mack-the-knife-songs-of-kurt-weill-1929-1956-cd.jpg]
picture5 = File.open('/Users/fanniewang/desktop/projects/sound-byte/app/assets/images/seeds/mozart_cover.jpg')
picture6 = File.open('/Users/fanniewang/desktop/projects/sound-byte/app/assets/images/seeds/vivaldi_cover.jpg')
picture7 = File.open('/Users/fanniewang/desktop/projects/sound-byte/app/assets/images/seeds/vivaldi_cover.jpg')
picture8 = File.open('/Users/fanniewang/desktop/projects/sound-byte/app/assets/images/seeds/bach_cover.jpg')
picture9 = %Q[http://www.printmag.com/wp-content/uploads/Fig.62.jpg]
picture10 = %Q[http://s.hswstatic.com/gif/elvis-presley-biography-19.jpg]
picture11 = %Q[http://images.rapgenius.com/4e106ad65ee7fc02e0d4d3f0d3c96e13.980x1000x1.jpg]
picture12 = %Q[http://i43.tower.com/images/mm106014588/brahms-4-symphonies-herbert-von-karajan-cd-cover-art.jpg]

Track.destroy_all
Track.create(title: "Sing Sing Sing",
  description: %Q["Sing, Sing, Sing (With a Swing)" is a 1936 song written and composed by Louis Prima, who first recorded it with the New Orleans Gang and released it in March 1936 as a 78, Brunswick 7628, with "It's Been So Long" as the B side. It is strongly identified with the Big Band and Swing eras.],
  author_id: 1,
  album_image: picture1,
  audio: audio1);
Track.create(title: "Phantom of the Opera",
  description: %Q["The Phantom of the Opera" is a song from the stage musical of the same name. It was composed by Andrew Lloyd Webber, with lyrics written by Charles Hart and Richard Stilgoe, and additional lyrics by Mike Batt.],
  author_id: 1,
  album_image: picture2,
  audio: audio2);
Track.create(title: "My Girl" ,
  description: %Q["My Girl" is a 1964 standard recorded by The Temptations for the Gordy (Motown) label which became a number one hit in 1965. Written and produced by The Miracles members Smokey Robinson and Ronald White, the song became the Temptations' first U.S. number-one single, and is today their signature song. Robinson's inspiration for writing this song was his wife, Miracles member Claudette Rogers Robinson.],
  author_id: 1,
  album_image: picture3,
  audio: audio3);
Track.create(title: "Mack the Knife" ,
  description: %Q["Mack the Knife" or "The Ballad of Mack the Knife", originally "Die Moritat von Mackie Messer", is a song composed by Kurt Weill with lyrics by Bertolt Brecht for their music drama Die Dreigroschenoper, or, as it is known in English, The Threepenny Opera.],
  author_id: 1,
  album_image: picture4,
  audio: audio4);
Track.create(title: "Presto",
  description: %Q[Wolfgang Amadeus Mozart composed more than 600 works, many acknowledged as pinnacles of symphonic, concertante, chamber, operatic, and choral music. He is among the most enduringly popular of classical composers, and his influence is profound on subsequent Western art music.],
  author_id: 1,
  album_image: picture5,
  audio: audio5);
Track.create(title: "Spring",
  description: %Q[The Four Seasons (Italian: Le quattro stagioni) is a group of four violin concerti by Italian composer Antonio Vivaldi, each of which gives a musical expression to a season of the year. They were written about 1723 and were published in 1725 in Amsterdam, together with eight additional violin concerti, as Il cimento dell'armonia e dell'inventione ("The Contest Between Harmony and Invention").],
  author_id: 2,
   album_image: picture6,
   audio: audio6);
Track.create(title: "Largo" ,
  description: %Q[The Four Seasons (Italian: Le quattro stagioni) is a group of four violin concerti by Italian composer Antonio Vivaldi, each of which gives a musical expression to a season of the year. They were written about 1723 and were published in 1725 in Amsterdam, together with eight additional violin concerti, as Il cimento dell'armonia e dell'inventione ("The Contest Between Harmony and Invention").],
  author_id: 2,
  album_image: picture7,
  audio: audio7);
Track.create(title: "Jesu, Joy of Man's Desiring" ,
  description: %Q[Jesu, Joy of Man's Desiring is the most common English title of the 10th and last movement of the cantata Herz und Mund und Tat und Leben, BWV 147 ("Heart and Mouth and Deed and Life"), composed by Johann Sebastian Bach in 1716 and 1723.

A transcription by the English pianist Myra Hess (1890–1965) was published in 1926 for piano solo and in 1934 for piano duet. It is often performed slowly and reverently at wedding ceremonies, as well as during Christian festive seasons like Christmas and Easter, despite the affect suggested by Bach in his original scoring, for voices with trumpet, oboes, strings, and continuo.],
  author_id: 3,
  album_image: picture8,
  audio: audio8);
Track.create(title: "Moonglow" ,
  description: %Q["Moonglow", also known as "Moonglow and Love" is a 1933 popular song. The music was by Will Hudson (1908–1981) and Irving Mills and the words were by Eddie DeLange.],
  author_id: 3,
  album_image: picture9,
  audio: audio9);
Track.create(title: "Jailhouse Rock" ,
  description: %Q["Jailhouse Rock" is a song written by Jerry Leiber and Mike Stoller that first became a hit for Elvis Presley. The song was released as a 45rpm single on September 24, 1957, to coincide with the release of Presley's motion picture, Jailhouse Rock.

The song as recorded by Presley is #67 on Rolling Stone's list of The 500 Greatest Songs of All Time and was named one of The Rock and Roll Hall of Fame's 500 Songs that Shaped Rock and Roll.],
  author_id: 4,
  album_image: picture10,
  audio: audio10);
Track.create(title: "Dancing in the Street" ,
  description: %Q["Dancing in the Street" is a song written by Marvin Gaye, William "Mickey" Stevenson and Ivy Jo Hunter. It first became popular in 1964 when recorded by Martha and the Vandellas whose version reached No. 2 on the Billboard Hot 100 chart and peaked at No. 4 in the UK Singles Chart. It is one of Motown's signature songs and is the group's premier signature song.],
  author_id: 4,
  album_image: picture11,
  audio: audio11);
Track.create(title: "Symphony (excerpt 4th Mov)",
  description: %Q[Johannes Brahms (German: [joˈhanəs ˈbʁaːms]; 7 May 1833 – 3 April 1897) was a German composer and pianist. Born in Hamburg into a Lutheran family, Brahms spent much of his professional life in Vienna, Austria. His reputation and status as a composer is such that he is sometimes grouped with Johann Sebastian Bach and Ludwig van Beethoven as one of the "Three Bs" of music, a comment originally made by the nineteenth-century conductor Hans von Bülow.],
  author_id: 5,
  album_image: picture12,
  audio: audio12);

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
