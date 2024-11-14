import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="auth-container">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
);

export default SignUpPage;
