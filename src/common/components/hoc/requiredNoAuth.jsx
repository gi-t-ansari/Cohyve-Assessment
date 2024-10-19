import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { APP_URL } from "../../../config";
import { userSelector } from "../../../redux/slices/userSlice";
import { NoAuthLayout } from "../../layout";

const requireNoAuth = (Component) => {
  function NoAuthHoc(props) {
    const { isAuthenticated } = useSelector(userSelector);
    // console.log("isAuthenticated", isAuthenticated);

    return isAuthenticated ? (
      <Navigate to={APP_URL.HOME} />
    ) : (
      <NoAuthLayout>
        <Component {...props} />
      </NoAuthLayout>
    );
  }

  return (
    //
    <NoAuthHoc />
    // </div>
  );
};
export default requireNoAuth;
