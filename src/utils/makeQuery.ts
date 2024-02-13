export const makeQuery = (data: any) => {
  if (!data) return "";

  const query = Object.keys(data)
    .map((key) => `${key}=${data[key]}`)
    .join("&");

  return "?" + query;
};
