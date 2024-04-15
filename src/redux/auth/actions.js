import Cookies from "js-cookie";

const authActions = {
  LOGIN: "LOGIN",
  ADMINLOGOUT: "ADMINLOGOUT",
  CHECKADMIN: "CHECKADMIN",

  adminLogin: (data) => {
    return {
      type: authActions.LOGIN,
      isLogin: true,
      token: Cookies.get("admin_access_token"),
    };
  },

  adminLogout: (data) => {
    return {
      type: authActions.ADMINLOGOUT,
      data,
      token: undefined,
    };
  },

  checkAdmin: () => {
    return {
      type: authActions.CHECKADMIN,
      token: Cookies.get("admin_access_token")
        ? Cookies.get("admin_access_token")
        : "",
    };
  },
};

export default authActions;
