
export const createTrack = (track, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/tracks',
		data: track,
    contentType: false,
    processData: false,
		success,
		error
	});
};

export const updateTrack = (track, success, error) => {
	$.ajax({
		method: 'PATCH',
		url: '/api/tracks/:id',
		data: { track },
    dataType: 'json',
    contentType: false,
    processData: false,
		success,
		error
	});
};

export const deleteTrack = (track, success, error) => {
	$.ajax({
		method: 'DELETE',
		url: '/api/tracks/:id',
		data: { track },
		success,
    error: () => {
		  console.log("Track Delete error in TrackApiUtil#deleteTrack");
		}
	});
};

export const fetchAllTracksForUser = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/tracks',
    success,
    error
  });
};

export const fetchCurrentTrackView = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/tracks/${id}`,
    success,
    error
  });
};
