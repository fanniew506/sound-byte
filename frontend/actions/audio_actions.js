export const ON_PLAY  = "ON_PLAY";
export const ON_PAUSE = "ON_PAUSE";
export const ON_RESUME = "ON_RESUME";
export const ON_STOPPED = "ON_STOPPED";
export const ON_FINISHED_PLAYING = "ON_FINISHED_PLAYING";
export const ON_SEEK = "ON_SEEK";
export const ON_VOLUME_UP = "ON_VOLUME_UP";
export const ON_VOLUME_DOWN = "ON_VOLUME_DOWN";
export const DURATION = "DURATION";
export const SELECT_SONG = "SELECT_SONG";
export const PLAY_FROM_POSITION = "PLAY_FROM_POSITION";

export const selectSong = track => ({
  type: SELECT_SONG,
  track
});

export const onPlay = () => ({
  type: ON_PLAY
});

export const onResume = () => ({
  type: ON_RESUME
});

export const onPause = () => ({
  type: ON_PAUSE
});

export const onStopped = () => ({
  type: ON_STOPPED
});

export const onFinishedPlaying = () => ({
  type: ON_FINISHED_PLAYING
});

export const onVolumeUp = () => ({
  type: ON_VOLUME_UP
});

export const onVolumeDown = () => ({
  type: ON_VOLUME_DOWN
});

export const duration = () => ({
  type: DURATION
});

export const playfromPosition = () => ({
  type: PLAY_FROM_POSITION
});
