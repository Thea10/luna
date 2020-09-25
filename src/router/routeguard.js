export const authGard = (to, from, next) => {
  let isAuth = false;

  sessionStorage.getItem("logindata") ? (isAuth = true) : (isAuth = false);

  isAuth ? next() : next("/login");
   
};

export const checklogIn = (to, from, next) => {
    let isAuth = false;
  
    sessionStorage.getItem("logindata") ? (isAuth = true) : (isAuth = false);
  
    isAuth ? next("/profile") : next();
  };
