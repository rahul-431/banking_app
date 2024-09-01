import AuthForm from "@/components/ui/AuthForm";

const SignInPage = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="signin" />
    </section>
  );
};

export default SignInPage;
