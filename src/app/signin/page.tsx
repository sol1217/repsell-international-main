import SignIn from "@/components/SignIn/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ingresar Perfil admin",
  description: "Repsell perfil administrativo",
};

const SigninPage = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default SigninPage;
