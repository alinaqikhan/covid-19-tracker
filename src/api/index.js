import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(URL);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.error(error);
  }
};
