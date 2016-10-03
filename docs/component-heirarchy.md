## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - HeaderNavigation
 - TracksIndex
 - CurrentPlayingTrack


**ProfileContainer**
 - HeaderNavigation
 - AuthorInformation
 - AllUserTracks
  + TracksIndex
 - CurrentPlayingTrack

**TrackContainer**
 - HeaderNavigation
 - TracksIndex
 - CommentIndex
 - CurrentPlayingTrack

 **CommentIndex***
  - NewCommentForm
  - CommentItem
    + Commentdetail

 **TrackIndex**
 - TrackDetailItem
  + TrackInformation

**NewTrackContainer**
  - NewUpload
    + TrackDetail
    + SubmitButton

**CommentDetails**
 - AuthorInformation
  * AuthorUsername
  * AuthorPicture
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
| "/home/:userid" | "ProfileContainer" |
| "/home/:userid/:track_id" | "TrackContainer" |
| "/new_track | "NewTrackContainer" |
| "/edit_profile" | "EditProfile" |
