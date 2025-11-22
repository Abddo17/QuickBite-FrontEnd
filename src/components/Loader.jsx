import React from "react";

const Loader = ({ label = "Loading…" }) => {
  return (
    <div className="h-screen flex flex-col gap-6 items-center justify-center bg-gradient-to-br from-black to-zinc-900 text-white/80">
      <div className="relative z-1 w-[300px] h-[30px] flex items-center justify-center">
        <div className="circle_t " />
        <div className="circle_t" />
        <div className="circle_t" />
        <div className="shadow" />
        <div className="shadow" />
        <div className="shadow" />
      </div>
      <p className="text-sm tracking-wide uppercase">{label}</p>
    </div>
  );
};

export default Loader;
