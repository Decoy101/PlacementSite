import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authPaths } from "./paths";
import { useUserAuth } from "@/contexts/user.context";
import { AnimationBlurOpacity } from "@/components";
function ProtectedRoute() {
  const { currentUser } = useUserAuth();
  const location = useLocation();

  if (currentUser == null) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={authPaths.login} state={{ from: location }} replace />;
  }
  return (
    <AnimationBlurOpacity>
      <Outlet />
    </AnimationBlurOpacity>
  );
}

export default ProtectedRoute;
