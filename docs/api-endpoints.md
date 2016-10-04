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

- `GET /api/tracks/:tracks_id/comments` : A track's comments will be included in the track show template
- `POST /api/tracks/:tracks_id/comments`
- `DELETE /api/tracks/:tracks_id/comments/:id` : remove comment from track by
  id
