export const ON_PLAY  = "ON_PLAY";
export const ON_PAUSE = "ON_PAUSE";
export const ON_RESUME = "ON_RESUME";
export const ON_STOP = "ON_STOP";
export const ON_FINISHED_PLAYING = "ON_FINISHED_PLAYING";
export const ON_SEEK = "ON_SEEK";
export const ON_VOLUME_UP = "ON_VOLUME_UP";
export const ON_VOLUME_DOWN = "ON_VOLUME_DOWN";
export const DURATION = "DURATION";
export const SELECT_SONG = "SELECT_SONG";
export const UPDATE_POSITION = "UPDATE_POSITION";
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

export const onStop = () => ({
  type: ON_STOP
});

export const onFinishedPlaying = () => ({
  type: ON_FINISHED_PLAYING
});

export const onVolumeUp = (currentVolume) => ({
  type: ON_VOLUME_UP,
  currentVolume
});

export const onVolumeDown = (currentVolume) => ({
  type: ON_VOLUME_DOWN,
  currentVolume
});

export const duration = () => ({
  type: DURATION
});

export const playfromPosition = () => ({
  type: PLAY_FROM_POSITION
});

export const updatePosition = position => ({
  type: UPDATE_POSITION,
  position
});
