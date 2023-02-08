import Chart from "./Chart.tsx"

const currencies = [
    {
      name: 'Bitcoin',
      price: '$ 29,231.26',
      ticker: 'BTC',
      change: '+ 2.11%',
      marketCap: '$ 442.24B',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-and-brands%2F512%2F45_Bitcoin_logo_logos-512.png&f=1&nofb=1&ipt=cf23ea6fa1543cb950134f3e8b6c198d23100942f5fe1d43ee7941aacd5d378c&ipo=images',
    },
    {
      name: 'Ethereum',
      price: '$ 1,515.01',
      ticker: 'ETH',
      change: '+ 5.51%',
      marketCap: '$ 200.32B',
      image:
        'https://cdn.iconscout.com/icon/free/png-512/ethereum-3521413-2944857.png',
    },
    {
      name: 'Tether',
      price: '$ 1,649.59',
      ticker: 'USDT',
      change: '+ 2.04%',
      marketCap: '$ 199.84B',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F2x%2Ftether.png&f=1&nofb=1&ipt=2c3eda005bde711ef0e708b70587126adf0a93f14f8591e327308605b20497a6&ipo=images',
    },
    {
      name: 'Dogecoin',
      price: '$ 0.85',
      ticker: 'DOGE',
      change: '+ 3.20%',
      marketCap: '$ 12.28B',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2018%2F04%2FDogeCoin_logo_dog.png&f=1&nofb=1&ipt=224a776e6266b625c44b56ce76b07283774a288b922157e93603e45db97b472f&ipo=images',
    },
    // More currencies...
  ]
  
  export default function ExchangeTable() {
    return (
      <div className="px-4 sm:px-6 lg:px-[100px] mx-auto max-w-7xl mt-28 mb-14">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-4xl font-bold text-black">Exchange any <br /> of 1000+ pairs</h1>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
                type="button"
                className="h-10 inline-flex items-center border border-transparent bg-[#0000000c] px-4 py-2 text-xs font-bold text-black hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                View all 216+ assets
                <span className="ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -2 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden md:rounded-lg">
                <table className="min-w-full divide-y divide-transparent">
                  <thead className="bg-transparent">
                    <tr>
                      <th scope="col" className="py-3.5pr-3 text-left text-sm font-semibold text-gray-900">
                        Name
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Price
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Change
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Market cap
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Buy
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Chart
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#635a6928] bg-transparent">
                    {currencies.map((currency) => (
                      <tr key={currency.email}>
                        <td className="whitespace-nowrap py-4 pr-3 text-sm">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-black flex justify-center items-center">
                              <img className="h-6 w-6  rounded-full" src={currency.image} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900 font-bold">{currency.name}</div>
                              <div className="text-gray-500">{currency.ticker}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900 font-bold">{currency.price}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="text-gray-900 font-bold">{currency.change}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900 font-bold">{currency.marketCap}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center w-16 h-8 border border-transparent bg-black px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Buy
                        </button>
                        </td>
                        <td className="w-[88px] whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <Chart width={100} height={50} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  