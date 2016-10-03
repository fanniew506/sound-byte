# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Tracks

- `GET /api/tracks`
- `POST /api/tracks`
- `GET /api/tracks/:id`
- `PATCH /api/tracks/:id`
- `DELETE /api/tracks/:id`

### Comments

- A tracks's comments will be included in the track show template
- `GET /api/tracks/:id/comments`
- `POST /api/tracks/:id/comment`:
- `DELETE /api/tracks/:id/:comment_id`: remove comment from track by
  id
