import axios from "axios";

export const getAllData = async () => {
  const data = await (
    await axios.get("https://mocki.io/v1/5e199a92-576f-4194-ad0d-b942c12bcdce")
  ).data;
  return data;
};
