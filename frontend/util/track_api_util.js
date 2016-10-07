
export const createTrack = (track, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/users/:user_id/tracks',
		data: { track },
		success,
		error
	});
};

export const updateTrack = (track, success, error) => {
	$.ajax({
		method: 'PATCH',
		url: '/api/users/:user_id/tracks/:id',
		data: { track },
		success,
		error
	});
};

export const deleteTrack = (track, success, error) => {
	$.ajax({
		method: 'DELETE',
		url: '/api/users/:user_id/tracks/:id',
		data: { track },
		success,
    error: () => {
		  console.log("Track Delete error in TrackApiUtil#deleteTrack");
		}
	});
};
