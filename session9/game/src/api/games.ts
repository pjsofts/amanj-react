const key = "689795c249794faf959947e23315256a";
const url = "https://api.rawg.io/api";

async function getGames(search: string) {
  try {
    let query = "";
    if (search) {
      query += `&search=${search}`;
    }
    const response = await fetch(`${url}/games?key=${key}${query}`);
    const data = await response.json();
    console.log("inside getGames data is", data);
    return data;
  } catch (e) {
    console.log("some error happened in api call");
  }
}

export { getGames };
