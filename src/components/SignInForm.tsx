import Image from "next/image";
import SignInButton from "./SignInButton";

export default function SignInForm() {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            alt="PodCodar Llama"
            className="mx-auto h-10 w-auto"
            height={100}
            priority
            src="/images/logo.svg"
            style={{ height: "100px" }}
            width={100}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-5">
            <SignInButton provider="github">Continue with Github</SignInButton>
          </div>
        </div>
      </div>
    </>
  );
}
