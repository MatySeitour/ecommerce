import axios from "axios";

type cookieType = {
  name: string;
  value: string;
};

export async function getSession(serverCookie?: cookieType) {
  const url = `http://localhost:3000/validate`;
  const options = serverCookie
    ? {
        withCredentials: true,
        headers: { Cookie: `authorization=${serverCookie.value}` },
      }
    : {
        withCredentials: true,
      };
  const rawSession = await axios.get(url, options);
  return rawSession.data;
}
