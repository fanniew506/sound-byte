
export const createTrack = (track, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/tracks',
		data: { track },
		success,
		error
	});
};

export const updateTrack = (track, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/tracks',
		data: { track },
		success,
		error
	});
};
export const deleteTrack = (track, success, error) => {
	$.ajax({
		method: 'DELETE',
		url: '/api/tracks',
		data: { track },
		success,
		error
	});
};

export const deleteTrack = success => {
	$.ajax({
		method: 'DELETE',
		url: '/api/session',
		success,
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
	});
};
