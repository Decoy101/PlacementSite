import { useUserAuth } from "@/contexts/user.context";
import { Suspense } from "react";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
function Routes() {
  const { currentUser } = useUserAuth();

  return <Suspense> {currentUser ? <AppRoutes /> : <AuthRoutes />}</Suspense>;
}
export default Routes;
