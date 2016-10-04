## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - HeaderNavigation
 - CurrentPlayingTrack


**ProfileContainer**
 - AuthorInformation
 - AllUserTracks
  + TracksIndex

**TrackContainer**
 - TracksIndex
 - CommentIndex

**LatestTrackContainer**
 - TracksIndex

**CommentIndex**
  - NewCommentForm
  - CommentItem

 **TrackIndex**
 - TrackDetailItem
  + TrackInformation

**NewTrackContainer**
  - NewUpload
    + TrackDetail
    + SubmitButton

**CommentItem**
 - AuthorInformation
 - CommentBody

**EditProfile**
- EditProfileForm
- CurrentPlayingTrack



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/latest" | "LatestTrackContainer" |
| "/profile" | "ProfileContainer" |
| "/profile/tracks" | "TrackIndex" |
| "/:track_id" | "TrackContainer" |
| "/:track_id/comments" | "CommentIndex" |
| "/new_track | "NewTrackContainer" |
| "/edit_profile" | "EditProfile" |
