import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { APP_URL } from "../../../config";
import { userSelector } from "../../../redux/slices/userSlice";

const requireNoAuth = (Component) => {
  function NoAuthHoc(props) {
    const { isAuthenticated } = useSelector(userSelector);
    // console.log("isAuthenticated", isAuthenticated);

    return isAuthenticated ? (
      <Navigate to={APP_URL.HOME} />
    ) : (
      <Component {...props} />
    );
  }

  return (
    <div className={`w-full min-h-screen flex justify-center items-center `}>
      <NoAuthHoc />
    </div>
  );
};
export default requireNoAuth;
