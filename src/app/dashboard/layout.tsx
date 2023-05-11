import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full px-20 py-10">
        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-x-24">
            <div>
              <>MenuIcon</>
            </div>
            <div>
              <p className="font-bold text 2x1">TEAM</p>
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="px-6 text-sm bg-blue-200 rounded-full text-black flex items-center justify-center">
              <p>Sarah Haghiri</p>
            </div>
            <div className="bg-gradient-to-t from-blue-500 to blue-50 rounded-full p-3 text-xl text-white">
              <>Icon</>
            </div>
            <div className="bg-gradient-to-t from-blue-500 to blue-50 rounded-full p-3 text-xl text-white">
              <>Icon</>
            </div>
            <div className="bg-gradient-to-t from-purple-500 to purple-50 rounded-full p-3 text-xl text-white">
              <>Icon</>
            </div>
            <div className="bg-gradient-to-t from-purple-500 to purple-50 rounded-full p-3 text-xl text-white">
              <>Icon</>
            </div>
            <div className="bg-gradient-to-t from-red-500 to red-50 rounded-full p-3 text-xl text-white">
              <>Icon</>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="w-full">
          <div className="w-[70%] bg-blue-50 flex flex-col items-center rounded-x1 gap-y-10 py-3">
            <div className="text-x1 text-blue-600 hover:scale-105">
              <>Icon</>
            </div>
          </div>
        </div>
      </section>

      <main>{children}</main>
    </>
  );
}
