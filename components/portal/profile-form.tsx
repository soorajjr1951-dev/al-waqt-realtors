"use client";

import { FormEvent, useState } from "react";

export function ProfileForm() {
  const [saved, setSaved] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <div className="card common-card">
      <div className="card-header"><h6 className="title mb-0">Profile</h6></div>
      <div className="card-body">
        <form onSubmit={submit}>
          <div className="row gy-4">
            <div className="col-sm-6">
              <label htmlFor="profile-name" className="form-label">Name</label>
              <input id="profile-name" className="common-input" defaultValue="Ananya" />
            </div>
            <div className="col-sm-6">
              <label htmlFor="profile-email" className="form-label">Email address</label>
              <input id="profile-email" type="email" className="common-input" placeholder="you@example.com" />
            </div>
            <div className="col-12"><button type="submit" className="btn btn-main">Save changes</button></div>
          </div>
          {saved && <p className="form-note" role="status">Demo only: profile changes are not stored yet.</p>}
        </form>
      </div>
    </div>
  );
}
