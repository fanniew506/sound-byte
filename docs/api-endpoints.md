# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users`
- `POST /api/users`
- `PATCH /api/users`

### Session

- `GET /api/session`
- `POST /api/session`
- `DELETE /api/session`

### Tracks

- `GET /api/tracks` : gets all tracks for the track index on the home page
- `GET /api/users/tracks`
- `POST /api/users/tracks`
- `GET /api/users/tracks/:id`
- `PATCH /api/users/tracks/:id`
- `DELETE /api/users/tracks/:id`

### Comments

- `GET /api/users/tracks/:tracks_id/comments` : A track's comments will be included in the track show template
- `POST /api/users/tracks/:tracks_id/comments`
- `DELETE /api/users/tracks/:tracks_id/comments/:id` : remove comment from track by
  id
