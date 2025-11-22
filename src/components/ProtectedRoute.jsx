import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader.jsx";
import {
  selectIsAuthenticated,
  selectUser,
  selectFetchStatus,
} from "../selectors/authSelectors";
import { fetchUser } from "../features/authSlice.jsx";

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const fetchStatus = useSelector(selectFetchStatus);

  useEffect(() => {
    if (fetchStatus === "idle" && isAuthenticated === null) {
      dispatch(fetchUser());
    }
  }, [dispatch, fetchStatus, isAuthenticated]);

  const isCheckingAuth =
    fetchStatus === "loading" ||
    (fetchStatus === "idle" && isAuthenticated === null);

  if (isCheckingAuth) {
    return <Loader label="Checking your access…" />;
  }
  // Not logged in
  if (!isAuthenticated || !user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname,
          message: "Please sign in to continue",
        }}
      />
    );
  }

  // Wrong role
  if (requiredRole && user?.role !== requiredRole) {
    return (
      <Navigate
        to="/not-authorized"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  // Allow nested routes OR children
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
