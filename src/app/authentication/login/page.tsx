import FormHeader from "@/components/authentication/FormHeader";
import LoginForm from "@/components/authentication/LoginForm";

export default function Page() {
  return (
    <>
      <FormHeader title="Login" description="Please enter your details." />
      <LoginForm />
    </>
  );
}
