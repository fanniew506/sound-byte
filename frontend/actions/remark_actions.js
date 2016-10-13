export const ALL_COMMENTS = "ALL_COMMENTS";
export const FETCH_ALL_COMMENTS = "FETCH_ALL_COMMENTS";
export const CREATE_COMMENT = "CREATE_COMMENT";


export const allComments = comments => ({
  type: ALL_COMMENTS,
  comments
});

export const fetchAllComments = (id) => ({
  type: FETCH_ALL_COMMENTS,
  id
});

export const createComment = (data) => ({
  type: CREATE_COMMENT,
  data
});
