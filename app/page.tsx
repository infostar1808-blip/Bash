"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 120000, spend: 25000 },
  { month: "Feb", sales: 180000, spend: 30000 },
  { month: "Mar", sales: 220000, spend: 42000 },
  { month: "Apr", sales: 280000, spend: 50000 },
  { month: "May", sales: 320000, spend: 65000 },
];

const marketplaceData = [
  { name: "Amazon", value: 55 },
  { name: "Flipkart", value: 20 },
  { name: "Myntra", value: 15 },
  { name: "Ajio", value: 10 },
];

const campaignData = [
  {
    campaign: "Running Shoes",
    acos: "24%",
    roas: "4.2",
    spend: "₹45,000",
    revenue: "₹1,90,000",
  },
  {
    campaign: "Casual Shoes",
    acos: "31%",
    roas: "3.1",
    spend: "₹62,000",
    revenue: "₹2,10,000",
  },
  {
    campaign: "Sports Collection",
    acos: "18%",
    roas: "5.4",
    spend: "₹38,000",
    revenue: "₹2,05,000",
  },
];

const COLORS = ["#111827", "#374151", "#6B7280", "#9CA3AF"];

function KPI({ title, value, growth }: any) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
      <p className="text-green-600 text-sm mt-2">{growth}</p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-72 bg-black text-white p-6 hidden md:block">
        <h1 className="text-3xl font-bold mb-10">Adlytics</h1>

        <div className="space-y-4 text-gray-300">
          <div className="bg-white text-black px-4 py-3 rounded-xl font-medium">
            Dashboard
          </div>

          <div className="px-4 py-3 hover:bg-gray-900 rounded-xl cursor-pointer">
            Executive Summary
          </div>

          <div className="px-4 py-3 hover:bg-gray-900 rounded-xl cursor-pointer">
            Marketplace Performance
          </div>

          <div className="px-4 py-3 hover:bg-gray-900 rounded-xl cursor-pointer">
            Campaign Analytics
          </div>

          <div className="px-4 py-3 hover:bg-gray-900 rounded-xl cursor-pointer">
            Category Analysis
          </div>

          <div className="px-4 py-3 hover:bg-gray-900 rounded-xl cursor-pointer">
            AI Insights
          </div>

          <div className="px-4 py-3 hover:bg-gray-900 rounded-xl cursor-pointer">
            Upload Reports
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-6 md:p-10 overflow-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              Marketplace Analytics Dashboard
            </h1>
            <p className="text-gray-500 mt-2">
              Multi-brand e-commerce sales and ads performance tracking
            </p>
          </div>

          <div className="flex gap-3">
            <select className="px-4 py-3 rounded-xl border bg-white">
              <option>All Brands</option>
              <option>Nike</option>
              <option>Puma</option>
              <option>Campus</option>
            </select>

            <select className="px-4 py-3 rounded-xl border bg-white">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Custom Range</option>
            </select>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <KPI title="Total Sales" value="₹12.4L" growth="+18% vs last month" />
          <KPI title="Total Orders" value="5,842" growth="+12% vs last month" />
          <KPI title="Ad Spend" value="₹2.8L" growth="+9% vs last month" />
          <KPI title="Ad Revenue" value="₹11.1L" growth="+21% vs last month" />
          <KPI title="ACOS" value="25.2%" growth="Improved by 3%" />
          <KPI title="TACOS" value="14.8%" growth="Improved by 2%" />
          <KPI title="ROAS" value="4.2" growth="+11% vs last month" />
          <KPI title="Conversion" value="10.5%" growth="+2.1% vs last month" />
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Sales vs Ad Spend
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#111827"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="spend"
                  stroke="#6B7280"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Marketplace Contribution
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={marketplaceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {marketplaceData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Campaign Table */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm mb-8 overflow-x-auto">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold">Campaign Analytics</h2>

            <button className="bg-black text-white px-5 py-3 rounded-xl hover:opacity-90">
              Export Report
            </button>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 rounded-l-xl">Campaign</th>
                <th className="p-4">ACOS</th>
                <th className="p-4">ROAS</th>
                <th className="p-4">Ad Spend</th>
                <th className="p-4 rounded-r-xl">Revenue</th>
              </tr>
            </thead>

            <tbody>
              {campaignData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4">{item.campaign}</td>
                  <td className="p-4">{item.acos}</td>
                  <td className="p-4">{item.roas}</td>
                  <td className="p-4">{item.spend}</td>
                  <td className="p-4">{item.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
            <div>
              <h2 className="text-2xl font-semibold">
                Upload OMS Reports
              </h2>
              <p className="text-gray-500 mt-1">
                Upload Unicommerce / Uniware daily reports and marketplace ads data.
              </p>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90">
              Upload Excel
            </button>
          </div>

          <div className="border-2 border-dashed rounded-2xl p-14 text-center text-gray-500 bg-gray-50">
            Drag & drop Excel files here (.xlsx / .csv)
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-black text-white rounded-2xl p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-5">AI Insights</h2>

          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-xl">
              Amazon ROAS improved by 14% compared to previous month due to higher conversion rate.
            </div>

            <div className="bg-gray-900 p-4 rounded-xl">
              Myntra campaigns showed highest TACOS efficiency among all marketplaces.
            </div>

            <div className="bg-gray-900 p-4 rounded-xl">
              Casual Shoes category contributed 38% of total monthly revenue.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
