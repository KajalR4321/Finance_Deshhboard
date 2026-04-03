import data from '../../../src/json data/Transection.json';
import { useState } from 'react';

const TransactionsTable = () => {
    const [filter, setFilter] = useState('All');

    return (
        <div className="flex flex-col gap-8 bg-gray-100 min-h-screen">

            {/* 1. HEADER SECTION */}
            {/* Changed: Added responsive padding (px-4 lg:px-10) and removed hard-coded ml-10 */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 md:px-10 mt-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1C1F2E]">Transactions</h2>
                    <p className="text-slate-400 text-sm mt-1">Review and manage your institutional financial flows.</p>
                </div>
                <button className="bg-[#1C1F2E] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-sm">
                    <span className="text-lg">+</span> Add Transaction
                </button>
            </div>

            {/* 2. FILTER CONTROLS SECTION */}
            <div className="w-full flex justify-center px-4 md:px-10">
                <div className="w-full max-w-6xl bg-white rounded-2xl border border-slate-100 overflow-hidden">
                    {/* Changed: Added flex-col on mobile, flex-row on desktop */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-4 lg:py-4 lg:px-8 bg-gray-200">

                        {/* Category Dropdown */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Category</label>
                            <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none min-w-[160px] hover:cursor-pointer w-full lg:w-auto">
                                <option>All Categories</option>
                                <option>Operations</option>
                                <option>Services</option>
                            </select>
                        </div>

                        {/* Type Toggle */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Type</label>
                            <div className="flex bg-gray-300 p-1 rounded-lg border border-gray-300 w-full lg:w-auto">
                                {['All', 'Income', 'Expense'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setFilter(type)}
                                        className={`flex-1 lg:flex-none px-4 py-1.5 text-xs font-bold rounded-md transition-all ${filter === type ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SECTION: Icons */}
                        {/* Changed: Adjusted alignment for mobile */}
                        <div className="flex items-center gap-3 lg:ml-auto self-start lg:self-end">
                            <button className="p-2 bg-white text-slate-500 rounded-lg border border-slate-200 shadow-sm" title="Download Report">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </button>
                            <button className="p-2 bg-white text-slate-500 rounded-lg border border-slate-200 shadow-sm" title="Menu">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. THE TABLE SECTION */}
            <div className="w-full flex justify-center px-4 md:px-10">
                <div className="w-full max-w-6xl bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">

                    {/* Changed: Wrapped table in overflow-x-auto to enable horizontal scrolling on mobile */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left min-w-[700px]">
                            <thead className="bg-slate-50/50 border-b border-slate-100">
                                <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Description</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">Type</th>
                                    <th className="px-6 py-4 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {data.map((item) => (
                                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-5 text-sm text-slate-500 whitespace-nowrap">{item.date}</td>
                                        <td className="px-6 py-5 min-w-[200px]">
                                            <div className="text-sm font-semibold text-slate-900">{item.description}</div>
                                            <div className="text-xs text-slate-400 mt-0.5">{item.subtext}</div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="px-2.5 py-1 text-[10px] font-bold bg-slate-100 text-slate-500 rounded-md uppercase whitespace-nowrap">
                                                {item.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className={`flex items-center gap-1.5 text-[11px] font-bold uppercase whitespace-nowrap ${item.type === 'INCOME' ? 'text-emerald-500' : 'text-rose-500'
                                                }`}>
                                                <span>{item.type === 'INCOME' ? '↑' : '↓'}</span> {item.type}
                                            </div>
                                        </td>
                                        <td className={`px-6 py-5 text-sm font-bold text-right whitespace-nowrap ${item.amount > 0 ? 'text-emerald-600' : 'text-slate-900'
                                            }`}>
                                            {item.amount > 0 ? `+$${item.amount.toLocaleString()}` : `-$${Math.abs(item.amount).toLocaleString()}`}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Section */}
                    <div className="px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs font-medium text-slate-400">
                            Showing 10 of 4,284 transactions
                        </p>
                        <div className="flex items-center gap-2">
                            <button className="p-2 text-slate-400 hover:text-slate-900"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg></button>
                            <div className="flex items-center gap-1">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1C1F2E] text-white text-xs font-bold shadow-sm">1</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 text-xs font-bold">2</button>
                                <span className="px-1 text-slate-300 text-xs font-bold">...</span>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 text-xs font-bold">429</button>
                            </div>
                            <button className="p-2 text-slate-400 hover:text-slate-900"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. BOTTOM SUMMARY CARDS */}
            {/* Changed: Removed ml-10 and replaced with px-4 lg:px-10 for better alignment */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 pb-10">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 border-l-4 border-l-emerald-500 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Total Monthly Income</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-emerald-600">$642,390.00</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 border-l-4 border-l-rose-500 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Total Monthly Expenses</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">$98,440.00</h3>
                </div>
                <div className="bg-[#1C1F2E] p-6 rounded-2xl shadow-lg md:col-span-2 lg:col-span-1">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Net Cash Flow</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">+$543,950.00</h3>
                </div>
            </div>

        </div>
    )
};

export default TransactionsTable;