export default function MarketplaceSelect({ marketplace, setMarketplace }) {
  return (
    <div
      className={`mb-2 max-w-xs rounded-sm bg-gray-200 p-1 text-center text-sm dark:bg-gray-700`}
    >
      選擇賣場：
      <button
        className={`${
          marketplace === 'amazon' ? 'bg-blue-500' : 'bg-gray-400'
        } rounded-sm px-2 py-1 text-white`}
        onClick={() => setMarketplace('amazon')}
      >
        Amazon
        {marketplace === 'amazon' && <i className="fas fa-check ml-1" />}
      </button>
      <button
        className={`ml-1 ${
          marketplace === 'shopee' ? 'bg-orange-500' : 'bg-gray-400'
        } rounded-sm px-2 py-1 text-white`}
        onClick={() => setMarketplace('shopee')}
      >
        蝦皮
        {marketplace === 'shopee' && <i className="fas fa-check ml-1" />}
      </button>
    </div>
  )
}
