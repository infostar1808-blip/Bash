export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Adlytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl shadow p-5">
          <p className="text-gray-500">Total Sales</p>
          <h2 className="text-3xl font-bold">₹12.4L</h2>
          <p className="text-green-600 mt-2">+18% vs last month</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <p className="text-gray-500">Orders</p>
          <h2 className="text-3xl font-bold">5,842</h2>
          <p className="text-green-600 mt-2">+12% vs last month</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <p className="text-gray-500">Ad Spend</p>
          <h2 className="text-3xl font-bold">₹2.8L</h2>
          <p className="text-red-500 mt-2">+9% vs last month</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <p className="text-gray-500">ACOS</p>
          <h2 className="text-3xl font-bold">25.2%</h2>
          <p className="text-green-600 mt-2">Improved by 3%</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          Marketplace Performance
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Marketplace</th>
              <th className="text-left p-3">Revenue</th>
              <th className="text-left p-3">Orders</th>
              <th className="text-left p-3">ROAS</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">Amazon</td>
              <td className="p-3">₹6.8L</td>
              <td className="p-3">2,942</td>
              <td className="p-3 text-green-600">4.2x</td>
            </tr>

            <tr className="border-b">
              <td className="p-3">Flipkart</td>
              <td className="p-3">₹3.1L</td>
              <td className="p-3">1,504</td>
              <td className="p-3 text-green-600">3.8x</td>
            </tr>

            <tr>
              <td className="p-3">Myntra</td>
              <td className="p-3">₹2.5L</td>
              <td className="p-3">1,396</td>
              <td className="p-3 text-green-600">4.5x</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
