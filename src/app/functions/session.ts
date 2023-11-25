import axios from "axios";
import { redirect } from "next/navigation";

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
  try {
    const rawSession = await axios.get(url, options);
    return rawSession.data;
  } catch (e) {
    redirect("/error-server");
  }
}
