/* This example requires Tailwind CSS v3.0+ */
export default function CTA() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-full bg-gray-900
        ">
          <div className="mx-auto max-w-7xl relative isolate overflow-hidden bg-gray-900 px-6 pt-16sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-32 lg:pt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <p className="mt-6 text-lg leading-8 text-gray-300">
                You are my favorite customer!
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Enjoy this amazing
                <br />
                exchange app from
                <br />
                the LGO team.
              </h2>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <img src="./images/black_apple.svg" alt="apple store" />
                <img className="w-[150px]" src="./images/google-play-badge.png" alt="google play store"/>
              </div>
            </div>
            {/* <div className="relative mt-16 h-80 lg:mt-8">

            </div> */}
          </div>
        </div>
      </div>
    )
  }
  