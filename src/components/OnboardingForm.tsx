export default function OnboardingForm() {
  return (
    <div className="absolute h-screen w-screen z-10 top-0 left-0 bg-slate-800 overflow-auto">
      <form className="bg-purple-dark w-full md:w-9/12 mx-auto my-10 p-8 rounded-lg">
        <div className=" border-gray-900/10">
          <h2 className="text-base text-center font-semibold leading-7 text-white">
            Formulário de Inscrição
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="label" htmlFor="nome-social">
                Nome Social
              </label>
              <div className="mt-2">
                <input
                  autoComplete="given-name"
                  className="input"
                  id="first-name"
                  name="first-name"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="label" htmlFor="idade">
                Idade
              </label>
              <div className="mt-2">
                <input
                  autoComplete="family-name"
                  className="input"
                  name="last-name"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="label" htmlFor="idade">
                Gênero
              </label>
              <div className="mt-2">
                <input
                  autoComplete="family-name"
                  className="input"
                  name="last-name"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="label" htmlFor="email">
                Email address
              </label>
              <div className="mt-2">
                <input
                  autoComplete="email"
                  className="input"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="label" htmlFor="country">
                Country
              </label>
              <div className="mt-2">
                <select
                  autoComplete="country-name"
                  className="select"
                  id="country"
                  name="country"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label className="label" htmlFor="street-address">
                Street address
              </label>
              <div className="mt-2">
                <input
                  autoComplete="street-address"
                  className="input"
                  id="street-address"
                  name="street-address"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label className="label" htmlFor="city">
                City
              </label>
              <div className="mt-2">
                <input
                  autoComplete="address-level2"
                  className="input"
                  id="city"
                  name="city"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="label" htmlFor="region">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  autoComplete="address-level1"
                  className="input"
                  id="region"
                  name="region"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="label" htmlFor="postal-code">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  autoComplete="postal-code"
                  className="input"
                  id="postal-code"
                  name="postal-code"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
