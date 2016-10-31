export const createComment = (sentData) => {
  $.ajax({
    method: 'POST',
    url: `/api/tracks/${sentData.id}/remarks`,
    data: { body: sentData.comment }
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
