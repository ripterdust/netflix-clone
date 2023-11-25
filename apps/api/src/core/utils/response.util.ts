export const handleResponse = (data: any, statusCode: number = 200) => {
  return {
    data,
    statusCode,
  };
};
