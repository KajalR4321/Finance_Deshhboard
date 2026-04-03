import React from 'react';
import {
    BarChart, Bar, XAxis, ResponsiveContainer, Cell,
    PieChart, Pie
} from 'recharts';
import {
    FiLayout, FiTrendingUp, FiBriefcase, FiArrowUpRight, FiArrowDownRight, FiDollarSign
} from 'react-icons/fi';

// --- EXACT FIGMA DATA ---
const barData = [
    { name: 'JAN', value: 35 },
    { name: 'FEB', value: 50 },
    { name: 'MAR', value: 42 },
    { name: 'APR', value: 65 },
    { name: 'MAY', value: 58 },
    { name: 'JUN', value: 100 }, // Active Month
];

const pieData = [
    { name: 'Rent', value: 1200, color: '#10B981' },
    { name: 'Food', value: 850, color: '#3B82F6' },
    { name: 'Transport', value: 400, color: '#6366F1' },
    { name: 'Entertainment', value: 400, color: '#E2E8F0' },
];

const DashboardOverview = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10">

            {/* 1. HEADER SECTION */}
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-[#1C1F2E]">Dashboard Overview</h1>
                    <p className="text-slate-400 text-sm mt-2">
                        Welcome back, Alexander. Your private equity portfolio has grown by <span className="text-emerald-500 font-bold">2.4%</span> this quarter.
                    </p>
                </div>

                {/* Dark Wealth Card */}
                <div className="bg-[#1C1F2E] rounded-[32px] p-6 text-white lg:w-80 relative overflow-hidden shadow-xl">
                    <h4 className="text-sm font-bold mb-2">Private Wealth Insight</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                        Allocation in emerging markets is showing strong momentum. Consider rebalancing.
                    </p>
                    <button className="bg-emerald-400 text-[#1C1F2E] text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-xl hover:bg-emerald-300 transition-all">
                        Review Strategy
                    </button>
                </div>
            </div>

            {/* 2. STATS ROW */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard label="Total Balance" value="$45,200" change="+12%" icon={<FiLayout className="text-blue-500" />} />
                <StatCard label="Monthly Income" value="$8,450" change="+4%" icon={<FiTrendingUp className="text-purple-500" />} />
                <StatCard label="Monthly Expenses" value="$3,250" change="-2%" icon={<FiBriefcase className="text-rose-500" />} isNegative />
            </div>

            {/* 3. CHART GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* BAR CHART: Balance Trend */}
                <div className="lg:col-span-2 bg-white rounded-[32px] p-8 shadow-sm border border-slate-50">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="font-bold text-[#1C1F2E]">Balance Trend</h3>
                        <div className="flex bg-slate-100 p-1 rounded-xl text-[10px] font-bold">
                            <button className="px-4 py-1.5 bg-white shadow-sm rounded-lg text-[#1C1F2E]">6 MONTHS</button>
                            <button className="px-4 py-1.5 text-slate-400">1 YEAR</button>
                        </div>
                    </div>

                    <div className="h-64 w-full ">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                                barCategoryGap="13%">
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fontWeight: 700, fill: '#94A3B8' }}
                                    dy={10}
                                />
                                <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={65} >
                                    {barData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={index === 5 ? '#10B981' : '#D1FAE5'}
                                            className="transition-all duration-500 hover:opacity-80 "
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* PIE CHART: Category Spending */}
                <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-50 flex flex-col">
                    <h3 className="font-bold text-[#3c425c] mb-6">Category Spending</h3>
                    <div className="h-48 relative mb-6">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    innerRadius={65}
                                    outerRadius={85}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total</span>
                            <span className="text-2xl font-black text-[#1C1F2E]">$3,250</span>
                        </div>
                    </div>

                    <div className="space-y-3 mt-auto">
                        {pieData.map((item) => (
                            <div key={item.name} className="flex justify-between items-center text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-slate-400 font-semibold">{item.name}</span>
                                </div>
                                <span className="text-[#1C1F2E] font-bold">${item.value.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. RECENT TRANSACTIONS */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-200 overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-[#1C1F2E]">Recent Transactions</h3>
                    <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[600px]">
                        <thead>
                            <tr className="text-[10px] font-bold text-slate-300 uppercase tracking-widest border-b border-slate-200">
                                <th className="pb-4 px-2 text-gray-500">Transaction Details</th>
                                <th className="pb-4 text-gray-500">Category</th>
                                <th className="pb-4 text-gray-500">Date</th>
                                <th className="pb-4 text-right text-gray-500">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            <TransactionRow name="Luxury Retail Purchase" sub="Terminal 29108 • London" cat="Lifestyle" date="Oct 24, 2023" amount="-$1,240.00" icon={<FiBriefcase />} />
                            <TransactionRow name="Quarterly Dividend" sub="Global Tech Fund • Distribution" cat="Investment" date="Oct 22, 2023" amount="+$3,450.00" icon={<FiDollarSign />} isPositive />
                            <TransactionRow name="Airline Booking" sub="British Airways • LHR-JFK" cat="Travel" date="Oct 18, 2023" amount="-$650.20" icon={<FiLayout />} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// --- HELPER COMPONENTS ---
const StatCard = ({ label, value, change, icon, isNegative }) => (
    <div className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className="p-3.5 bg-slate-50 rounded-2xl text-xl">{icon}</div>
            <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
                <h2 className="text-2xl font-bold text-[#1C1F2E]">{value}</h2>
            </div>
        </div>
        <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full ${isNegative ? 'text-rose-500 bg-rose-50' : 'text-emerald-500 bg-emerald-50'}`}>
            {change.startsWith('+') ? <FiArrowUpRight /> : <FiArrowDownRight />} {change}
        </div>
    </div>
);

const TransactionRow = ({ name, sub, cat, date, amount, isPositive, icon }) => (
    <tr className="group hover:bg-slate-50 transition-colors">
        <td className="py-4 px-2">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">{icon}</div>
                <div>
                    <p className="text-sm font-bold text-[#1C1F2E]">{name}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{sub}</p>
                </div>
            </div>
        </td>
        <td className="py-4">
            <span className="text-[9px] font-black bg-slate-100 text-slate-500 px-2.5 py-1 rounded-lg uppercase tracking-widest">{cat}</span>
        </td>
        <td className="py-4 text-xs text-slate-400 font-semibold">{date}</td>
        <td className={`py-4 text-right text-sm font-black ${isPositive ? 'text-emerald-500' : 'text-[#1C1F2E]'}`}>{amount}</td>
    </tr>
);

export default DashboardOverview;