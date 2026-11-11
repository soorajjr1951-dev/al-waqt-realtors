import { LoginForm } from "@/components/forms/login-form";
import { PageBanner } from "@/components/theme/page-banner";
import { InnerShell } from "@/components/theme/shell";
import { spaces } from "@/lib/spaces";

export const metadata = { title: "Sign in | Al Waqt" };

export default function Login() {
  return (
    <InnerShell>
      <PageBanner title="Sign in" trail={[{ label: "Sign in" }]} />
      <section className="loginRegister padding-y-120">
        <div className="container container-two">
          <div className="loginRegister-box card common-card">
            <div className="card-body">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="loginRegister-thumb rounded overflow-hidden me-lg-2 d-flex h-100">
                    <img src={spaces[4].image} alt="A furnished garden apartment" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="loginRegister-content"><LoginForm /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerShell>
  );
}
