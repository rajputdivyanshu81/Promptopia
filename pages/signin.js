import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="auth-container">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
);

export default SignInPage;
