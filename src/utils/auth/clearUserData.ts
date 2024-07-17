import { destroyCookie } from "nookies";

export function clearUserData() {
  localStorage.removeItem("userAvatar");

  destroyCookie(null, "UserId", {
    path: "/",
  });
  destroyCookie(null, "adminId", {
    path: "/",
  });
  destroyCookie(null, "masterId", {
    path: "/",
  });
  destroyCookie(null, "companyId", {
    path: "/",
  });
  destroyCookie(null, "userRoles", {
    path: "/",
  });
  destroyCookie(null, "token", {
    path: "/",
  });
  destroyCookie(null, "userName", {
    path: "/",
  });
  destroyCookie(null, "services", {
    path: "/",
  });
  destroyCookie(null, "Notifications", {
    path: "/",
  });
  destroyCookie(null, "supportId", {
    path: "/",
  });
  destroyCookie(null, "apiFlag", {
    path: "/",
  });
  destroyCookie(null, "saldoNegativo", {
    path: "/",
  });
  destroyCookie(null, "limiteDeCredito", {
    path: "/",
  });
}
