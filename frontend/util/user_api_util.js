export const updateUser = (sentData, success) => {
  debugger
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${sentData.id}`,
    data: sentData,
    contentType: false,
    processData: false,
    success
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
