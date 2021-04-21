import GithubIcon from "../../icons/GithubIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import OAuthButton from "./OAuthButton";
import Card from "../ui/Card";
import Input from "./Input";

const SignupForm = () => {
  return (
    <div className="flex justify-center">
      <Card className="w-full p-3 bg-white sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2">
        <h1 className="my-8 text-2xl text-center">Signup</h1>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <Input type="email" text="Email" />
          </div>
          <div className="flex flex-col">
            <Input type="password" text="Password" />
            <p className="mt-1 text-xs text-gray-400">
              password must be at least 5 long and contain a number
            </p>
          </div>
          <div className="flex flex-col">
            <Input type="password" text="Confirm Password" />
          </div>
          <button className="w-full p-4 text-white bg-blue-400 rounded shadow-md hover:bg-blue-300 transition-all">
            SIGNUP
          </button>
          <p className="text-sm text-center text-gray-400">or signup with</p>
          <OAuthButton icon={<GoogleIcon />} text="signup with google" />
          <OAuthButton icon={<GithubIcon />} text="signup with github" />
        </form>
      </Card>
    </div>
  );
};

export default SignupForm;
