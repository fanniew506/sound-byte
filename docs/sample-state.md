```js
{
  session: {
    current_user: {
      id: 1,
      username: "fannie",
      picture_url: "image.com"
    },
    errors: []
  },
  tracks: {
    1: {
      title: "Over the Rainbow",
      description: "Classic Song",
      author_id: 1,
      picture_url: "imgsrc.com"
      comments_id: [ 1, 2, 4]
    },
    2: {
      title: "Another Song",
      description: "Classical",
      author_id: 1,
      picture_url: "imgsrc2.com"
      comments_id: [ 3, 5]
    },
    errors: []
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
