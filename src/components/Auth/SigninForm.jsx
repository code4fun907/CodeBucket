import GithubIcon from "../../icons/GithubIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import OAuthButton from "./OAuthButton";
import AuthLayout from "./AuthLayout";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { useAuth } from "../../contexts/Auth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  const {
    signupWithEmailAndPassword,
    signinWithEmailAndPassword,
    signinWithGithub,
    signinWithGoogle,
  } = useAuth();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await signinWithEmailAndPassword(data.email, data.password);
    setIsSubmitting(false);
    history.push("/");
  };

  const onSignInWithGithub = async () => {
    setIsSubmitting(true);
    await signinWithGithub();
    setIsSubmitting(false);
    history.push("/");
  };

  const onSignInWithGoogle = async () => {
    setIsSubmitting(true);
    await signinWithGoogle();
    setIsSubmitting(false);
    history.push("/");
  };

  return (
    <AuthLayout>
      <h1 className="my-8 text-2xl text-center">Signin</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <Input type="text" text="Email" {...register("email")} />
        </div>
        <div className="flex flex-col">
          <Input type="password" text="Password" {...register("password")} />
        </div>
        <Form.SubmitButton disabled={isSubmitting}>signin</Form.SubmitButton>
        <p className="text-sm text-center text-gray-400">or signin with</p>
        <OAuthButton
          icon={<GoogleIcon />}
          text="signin with google"
          onClick={onSignInWithGoogle}
        />
        <OAuthButton
          icon={<GithubIcon />}
          text="signin with github"
          onClick={onSignInWithGithub}
        />
      </Form>
    </AuthLayout>
  );
};

export default SigninForm;
