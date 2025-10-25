import Login from "@/components/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Tuber",
  description: "Publish your first video",
  keywords:
    "signin , login, auth,signup,register,account login,profile login,admin login",
};

const LoginRouter = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginRouter;
