import axios from "axios";

export async function getSession(serverCookie?: any) {
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
  console.log("este es raw", rawSession);
  return rawSession.data;
}
