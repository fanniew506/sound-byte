export const createComment = (sent_data) => {

  $.ajax({
    method: 'POST',
    url: `/api/tracks/${sent_data.id}/remarks`,
    data: { body: sent_data.comment }
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
