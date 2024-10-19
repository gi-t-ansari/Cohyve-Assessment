import { Navigate } from "react-router";

import { useSelector } from "react-redux";
import { userSelector } from "../../../redux/slices/userSlice";

import { APP_URL } from "../../../config";
import { AuthLayout } from "../../layout";

const requireAuth = (Component) => {
  function AuthHoc(props) {
    const { isAuthenticated } = useSelector(userSelector);

    return isAuthenticated ? (
      <AuthLayout>
        <Component {...props} />
      </AuthLayout>
    ) : (
      <Navigate to={APP_URL.COMET} />
    );
  }

  return <AuthHoc />;
};
export default requireAuth;
