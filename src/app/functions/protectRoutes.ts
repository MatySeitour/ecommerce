import { redirect } from "next/navigation";
import { getSession } from "./session";

export default async function protectRoutes(sessionCookie: any) {
  //   const sessionCookie = cookies().get("authorization");

  if (sessionCookie?.name != "authorization") return redirect("/login");
  const isLogin = await getSession(sessionCookie);

  if (!isLogin) return redirect("/signup");
  if (isLogin.isVerify === false) {
    return redirect("/verify-account");
  } else {
    return isLogin;
  }
}

export async function protectVerifyAccount(sessionCookie: any) {
  if (sessionCookie?.name != "authorization") return redirect("/login");
  const isLogin = await getSession(sessionCookie);

  if (isLogin.isVerify === false) {
    return isLogin;
  } else {
    return redirect("/");
  }
}
