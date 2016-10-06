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
      comments_id: [ 1, 2, 4]
    }
  }
  comments: {
    1: { body: "Great Song!" },
    2: { body: "Love this" }
  }
  currentlyPlayed: {
    trackId: 1,
    paused: true,
    trackLength: 195,
    currentSecond: 84,
  }
}
  ```
