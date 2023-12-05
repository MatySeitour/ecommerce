import { redirect } from "next/navigation";
import { getSession } from "./session";

export default async function protectRoutes(sessionCookie: any) {
  if (sessionCookie?.name != "authorization") return redirect("/login");
  const isLogin = await getSession(sessionCookie);

  if (!isLogin) return redirect("/signup");
  if (isLogin.isVerify === false) {
    return redirect("/verify-account");
  } else if (isLogin.current_step != 4) {
    return redirect("/account-settings");
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

export async function protectRoutesAccountSettings(sessionCookie: any) {
  if (sessionCookie?.name != "authorization") return redirect("/login");
  const isLogin = await getSession(sessionCookie);

  if (isLogin.isVerify === false) {
    return redirect("/verify-account");
  } else {
    return isLogin;
  }
}

export async function protectRoutesSignUp(sessionCookie: any) {
  if (sessionCookie?.name == "authorization") return redirect("/");
}
