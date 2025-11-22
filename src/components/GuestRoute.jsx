import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader.jsx";
import {
  selectIsAuthenticated,
  selectFetchStatus,
} from "../selectors/authSelectors";
import { fetchUser } from "../features/authSlice.jsx";

const GuestRoute = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);
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
    return <Loader label="Preparing your account…" />;
  }

  if (isAuthenticated) {
    const redirectTo = location.state?.from || "/";
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default GuestRoute;
