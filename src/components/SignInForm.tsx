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
            style={{height: "100px"}}
            width={100}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            className="space-y-6 mb-5"
            method="POST"
          >
            <div>
              <label className="block text-sm font-medium leading-6 text-white" htmlFor="email">
                Email address
              </label>
              <div className="mt-2">
                <input
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="email"
                  name="email"
                  required
                  type="email"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-white" htmlFor="password">
                  Password
                </label>
                <div className="text-sm">
                  <a className="font-semibold text-fuchsia-500 hover:text-purple-500	" href="#">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="password"
                  name="password"
                  required
                  type="password"
                />
              </div>
            </div>
            <div>
              <button
                className="flex w-full justify-center rounded-md bg-purple-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="text-white font-bold mx-auto w-fit">Or</p>
          <div className="mt-5">
            <SignInButton provider="github">
              Continue with Github
            </SignInButton>
          </div>
        </div>
      </div>
    </>
  );
}
