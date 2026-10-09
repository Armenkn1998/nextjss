"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");

  const validUsername = process.env.DEMO_USERNAME;
  const validPassword = process.env.DEMO_PASSWORD;

  if (
    validUsername &&
    validPassword &&
    username === validUsername &&
    password === validPassword
  ) {
    const store = await cookies();

    // document.cookie = "username=admin; max-age=0; path=/";
    store.set("demo_session", "logged-in", {
      httpOnly: true, //թույլ չի տալիս JavaScript-ին կարդալ cookie-ն բրաուզերում։
      secure: process.env.NODE_ENV === "production", //արտադրական միջավայրում cookie-ն փոխանցվում է միայն HTTPS-ով։
      sameSite: "lax",
      // "lax" — թույլ է տալիս cookie-ն ուղարկել նույն կայքի հարցումներով և որոշ դեպքերում՝ այլ կայքից սովորական
      //  հղումով քո կայք անցնելիս։
      // "strict" — ավելի խիստ է․ այլ կայքից քո կայք անցնելիս cookie-ն սովորաբար չի ուղարկվում։
      // "none" — թույլ է տալիս cookie-ն ուղարկել նաև cross-site հարցումներով, բայց պահանջում է secure: true։
      path: "/", //Cookie-ն հասանելի է կայքի բոլոր ուղիների համար։
      maxAge: 3,
    });

    redirect("/dashboard");

  }

  redirect("/login?error=1");
}

export async function logout() {
  const store = await cookies();

  store.delete("demo_session");

  redirect("/login");
}
