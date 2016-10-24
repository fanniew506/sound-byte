# SoundByte

SoundByte is a music upload sharing and streaming web application inspired by SoundCloud(http://wwww.soundcloud.com) created by Fannie Wang. It features the ability for users to upload tracks, listen to other users uploads, and comment on tracks. Take a look at it live at [http://www.soundbytestreaming.com](http://www.soundbytestreaming.com) — you can log in on an already registered account with one click using the demo button.

[Live Here][live]

[live]: http://www.soundbytestreaming.com

## Features

* Authentication
  * Session is authenticated in the backend. All queries return data that corresponds to the proper user.
  * User can log in from any page in the app. Clicking on a link to save a recipe, access recipe box, etc. prompt the user for log in (as on the original app).
* Continuous play of selected song while navigating pages
* User can upload new tracks
* Comment on tracks
* View profile page of other users and their track uploads.
* Play tracks that other users have uploaded

## Code Guide

If you'd like to take a closer look at the code behind the Cookbook App, the best folders to look in are:

* [Sound_Byte.jsx](./frontend/sound_byte.jsx)
* [React components](./frontend/components/)
  * [App](./frontend/components/app.jsx)
* [Rails controllers](./app/controllers/api)
* [Redux Stores](./frontend/store/store.js)
* [Api Utils](./frontend/util/)
* [DB Schema](./db/schema.rb)
* [Rails Routes](./config/routes.rb)

## Languages, Frameworks, Libraries, Etc.

* Ruby on Rails
* PostgreSQL
* React
* Redux
* jQuery
* Gems
  * Paperclip
  * Jbuilder
  * BCrypt

## Screenshots

Home page:
![home page](./screenshots/homepage.png)

Logged In Home Page:
![home page](./screenshots/loggedin_homepage.png)

Profile page:
![recipe detail](./screenshots/profile.png)

Track page:
![recipe detail](./screenshots/track.png)
