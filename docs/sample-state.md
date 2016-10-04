```js
{
  currentUser: {
    id: 1,
    username: "fannie"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createTrack: {errors: ["must upload a file"]}
  },
  tracks: {
    1: {
      title: "Over the Rainbow",
      description: "Classic Song",
      author_id: 1,
      picture_url: "imgsrc.com"
      comments: {
        1: {
          id: 1
          body: "Great Song!"
          author_id: 2
          track_id: 1
        }
      }
    }
  currentlyPlayed: {
    trackId: 1,
    paused: true,
    trackLength: 195,
    currentSecond: 84,
  }
  }
  ```
