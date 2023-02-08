export default function Stats() {
    return (
      <div className="bg-[#111421] mx-auto max-w-7xl lg:max-h-40">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <dl className="text-center sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
            <div className="flex flex-row justify-center items-center">
              <dd className="order-1 text-lg font-bold tracking-tight text-white">We in numbers:</dd>
            </div>
            <div className="flex flex-row justify-between lg:justify-start">
              <dt className="order-2 ml-4 mt-2 text-sm font-medium leading-6 text-[#676873] leading-none text-right md:text-left">Quarterly <br /> volume traded</dt>
              <dd className="order-1 text-4xl font-bold tracking-tight text-white">$78B</dd>
            </div>
            <div className="mt-10 flex flex-row sm:mt-0 justify-between lg:justify-start">
              <dt className="order-2 ml-4 mt-2 text-sm font-medium leading-6 text-[#676873] leading-none text-right md:text-left">Countries <br /> supported</dt>
              <dd className="order-1 text-4xl font-bold tracking-tight text-white">100+</dd>
            </div>
            <div className="mt-10 flex flex-row sm:mt-0 justify-between lg:justify-start">
              <dt className="order-2 ml-4 mt-2 text-sm font-medium leading-6 text-[#676873] leading-none text-right md:text-left">Verified <br /> users</dt>
              <dd className="order-1 text-4xl font-bold tracking-tight text-white">2.4M+</dd>
            </div>
          </dl>
        </div>
      </div>
    )
  }