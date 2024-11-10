/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { frontendURL } from "../../frontendURL/frontendURL";

function CreateAccountButton() {
  return (
    <Link
      to={frontendURL("signup")}
      className="mt-8 flex w-4/5 max-w-[600px] flex-1 flex-col items-center justify-center overflow-hidden rounded-[40px] border border-solid border-neutral-900 px-16 py-4 text-center text-xl text-neutral-900 hover:bg-yellow-primary hover:text-white-primary"
    >
      <div className="gap-2 self-stretch">Create an account</div>
    </Link>
  );
}

export default CreateAccountButton;
