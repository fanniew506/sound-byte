export const updateUser = (sentData, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${sentData.id}`,
    data: sentData,
    contentType: false,
    processData: false,
    success,
    error
  });
};

export const getOtherProfileView = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
    success,
    error
  });
};
