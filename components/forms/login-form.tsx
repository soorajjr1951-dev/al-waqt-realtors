"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

/** Email sign-in. Not connected to an auth provider yet: submitting only confirms on screen. */
export function LoginForm() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={submit}>
      <h3 className="loginRegister__title text-poppins">Sign in to Al Waqt</h3>
      <p className="loginRegister__desc mb-4 font-18">Use your email address to manage saved spaces, enquiries and listings.</p>
      <div className="row gy-lg-4 gy-3">
        <div className="col-12">
          <label htmlFor="login-email" className="form-label">Email address</label>
          <input id="login-email" type="email" className="common-input" placeholder="you@example.com" required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-main w-100">Send sign-in link <span className="icon-right"><i className="far fa-paper-plane" /></span></button>
        </div>
        {sent && (
          <div className="col-12">
            <p className="form-note mt-0" role="status">Demo only: no sign-in link was sent because authentication is not connected yet.</p>
          </div>
        )}
        <div className="col-sm-12 mb-0">
          <div className="have-account text-center">
            <p className="text">Need to list a space? <Link className="link text-main text-decoration-underline font-14 text-poppins" href="/list-your-space">Start a listing</Link></p>
          </div>
        </div>
      </div>
    </form>
  );
}
