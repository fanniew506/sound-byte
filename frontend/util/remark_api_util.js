export const createComment = (data, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/tracks/${data.id}/remarks`,
    data: { comment: data.comment },
    success,
    error
  });
};

export const deleteComment = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/tracks/:track_id/remarks',
    data: { id },
    success,
    error
  });
};

export const fetchAllComments = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/tracks/:track_id/remarks',
    data: { id },
    success,
    error
  });
};
