import AuthTabs from "../views/Auth/AuthTabs";
import ForgotPassword from "../views/Auth/ForgotPassword";
import Login from "../views/Auth/Login";
import Signup from "../views/Auth/Signup";
import Home from "../views/Home";
import Posts from "../views/Posts/Posts";
// import { useTranslation } from "react-i18next";

export const useGetMenuList = () => {
  // const { t } = useTranslation();
  // const translationObj = t("navBar", {
  //   returnObjects: true,
  // });

  const menuList = [
    {
      // name: "translationObj.home.title",
      name: "Home",
      component: Home,
      path: "/",
      isNavBarLink: true,
    },
    {
      // name: "translationObj.companiesData.title",
      name: "Posts",
      component: Posts,
      path: "/posts/*",
      isNavBarLink: true,
      // isRequireAuth: true,
      children: [
        {
          name: "All Posts",
          path: "/posts/allposts",
        },
        {
          name: "Add Post",
          path: "/posts/addpost",
        },
      ],
    },
    {
      // name: "translationObj.home.title",
      name: "Auth",
      component: AuthTabs,
      path: "/auth/*",
      // isRequireAuth: true,
      // type: "modal",
      isNavBarLink: false,
      children: [
        {
          name: "Signup",
          path: "/auth/signup",
          component: Signup,
        },
        {
          name: "Login",
          path: "/auth/login",
          component: Login,
        },
        {
          name: "ForgotPassword",
          path: "/auth/forgot-password",
          component: ForgotPassword,
        },
      ],
    },
  ];
  return menuList;
};
