import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotAuthorized = () => {
  const location = useLocation();
  const from = location.state?.from || "/";

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-xl text-center space-y-5">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
          Access restricted
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          You don’t have permission to view this page
        </h1>
        <p className="text-base text-white/70">
          The area you’re trying to open requires additional privileges. If you
          believe this is a mistake, please contact support or try a different
          account.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/login"
            state={{ from }}
            className="px-6 py-3 rounded-full bg-amber-400 text-black font-medium transition hover:bg-amber-300"
          >
            Sign in with another account
          </Link>

          <Link
            to="/"
            className="px-6 py-3 rounded-full border border-white/30 text-white font-medium transition hover:border-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotAuthorized;
