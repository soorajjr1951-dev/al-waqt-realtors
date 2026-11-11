"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

export type PortalTab = { id: string; label: string; icon: string; content: ReactNode };

/** Theme "account" layout: a pill sidebar on the left and the active tab's content on the right. */
export function Portal({ tabs }: { tabs: PortalTab[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section className="account padding-y-120">
      <div className="container container-two">
        <div className="row gy-4">
          <div className="col-xl-3 col-lg-4">
            <div className="account-sidebar search-sidebar">
              <div className="nav side-tab flex-column nav-pills me-3" role="tablist" aria-orientation="vertical">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={tab.id === current.id}
                    className={`nav-link ${tab.id === current.id ? "active" : ""}`}
                    onClick={() => setActive(tab.id)}
                  >
                    <span className="icon"><i className={`fas ${tab.icon}`} /></span> {tab.label}
                  </button>
                ))}
                <Link href="/login" className="nav-link"><span className="icon"><i className="fas fa-sign-out-alt" /></span> Sign out</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="tab-content">
              <div className="tab-pane fade show active" role="tabpanel">{current.content}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Widget({ icon, value, label }: { icon: string; value: string | number; label: string }) {
  return (
    <div className="col-xl-4 col-sm-6 col-xs-6">
      <div className="dashboard-widget">
        <span className="dashboard-widget__icon"><i className={`fas ${icon}`} /></span>
        <div className="dashboard-widget__content">
          <h6 className="dashboard-widget__number">{value}</h6>
          <span className="dashboard-widget__text">{label}</span>
        </div>
      </div>
    </div>
  );
}

export function DemoNote() {
  return <p className="account-alert mb-4">This page shows demo data. It becomes live once sign-in and a database are connected.</p>;
}
