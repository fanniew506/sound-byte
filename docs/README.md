# SoundByte

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: https://sound-byte.herokuapp.com/

## Minimum Viable Product

SoundByte is a web application inspired by Soundcloud built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Song CRUD
- [ ] Continuous play while navigating site
- [ ] Comments
- [ ] User pages
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Tracks Model, API, and components (2 days)

**Objective:** Tracks can be created, read, edited and destroyed through
the API.

- [ ] `Tracks` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for tracks (`TracksController`)
- [ ] JBuilder views for tracks
- [ ] Track components and respective Redux loops
- [ ] Style tracks components
- [ ] Seed tracks

### Phase 4: Continuous Play (2 days)

**Objective:** The currently played track is played continuously while navigating to other pages

- [ ] Fetching currentlyPlayedTrack from tracks
- [ ] Style currently played track components

### Phase 5: Comments (1 days)

**Objective:** Tracks can have comments

- [ ] `Comments` model and `Comments` join table
- [ ] Fetching comments for tracks
- [ ] Adding comments to tracks
- [ ] Style comments components
- [ ] Seed comments with seed data


### Phase 6: - Pagination / infinite scroll for Tracks Index

**objective:** Add infinite scroll to TracksIndex

- [ ] Paginate Tracks Index API to send 10 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll

### Bonus Features (TBD)
- [ ] Search tracks by name
- [ ] Waveforms
- [ ] Likes
- [ ] Follow users
