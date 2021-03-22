export const getRandomUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=50", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
