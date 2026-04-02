import data from '.../../../src/json data/Transection.json';
import { useState } from 'react';

const TransactionsTable = () => {

    const [filter, setFilter] = useState('All');

    return (
        <div className="flex flex-col gap-8 bg-gray-100 m-auto">

            {/* 1. HEADER SECTION (Review and Manage) */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 ml-10  ">
                <div>
                    <h2 className="text-3xl font-bold text-[#1C1F2E] mt-10">Transactions</h2>
                    <p className="text-slate-400 text-sm mt-1">Review and manage your institutional financial flows.</p>
                </div>
                <button className="bg-[#1C1F2E] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-sm mr-10 mt-2">
                    <span className="text-lg">+</span> Add Transaction
                </button>
            </div>

            {/* 2. FILTER CONTROLS SECTION */}
            <div className="w-full flex justify-center px-4 md:px-10">
                <div className="w-full max-w-6xl bg-white rounded-2xl border border-slate-100 overflow-hidden ">
                    <div className="flex flex-wrap items-center gap-6 py-4 border-t border-slate-100  rounded-2xl border bg-gray-200  ">
                        {/* Category Dropdown */}
                        <div className="flex flex-col gap-1.5 ml-13">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Category</label>
                            <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-100 min-w-[160px] hover:cursor-pointer">
                                <option>All Categories</option>
                                <option>Operations</option>
                                <option>Services</option>
                            </select>
                        </div>

                        {/* Type Toggle (All, Income, Expense) */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Type</label>
                            <div className="flex bg-gray-300 p-1 rounded-lg border border-gray-300">
                                {['All', 'Income', 'Expense'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setFilter(type)}
                                        className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${filter === type ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* i want right section here */}
                        {/* RIGHT SECTION: Download and Hamburger Menu */}
                        <div className="flex items-center gap-3 ml-auto pr-4 self-end pb-1">

                            {/* 1. Download Icon */}
                            <button className="p-2 bg-white text-slate-500 hover:text-slate-900 cursor-pointer rounded-lg border border-slate-200 shadow-sm transition-all" title="Download Report">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </button>

                            {/* 2. Menu Bar Icon (3 Lines) */}
                            <button className="p-2 bg-white text-slate-500 hover:text-slate-900  cursor-pointer rounded-lg border border-slate-200 shadow-sm transition-all" title="Menu">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="4" x2="20" y1="12" y2="12" />
                                    <line x1="4" x2="20" y1="6" y2="6" />
                                    <line x1="4" x2="20" y1="18" y2="18" />
                                </svg>
                            </button>

                        </div>

                    </div>


                </div>
            </div>

            {/* 3. THE TABLE SECTION (Mapped from JSON) */}
            <div className="w-full flex justify-center px-4 md:px-10">
                <div className="w-full max-w-6xl bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
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
                                    <td className="px-6 py-5 text-sm text-slate-500">{item.date}</td>
                                    <td className="px-6 py-5">
                                        <div className="text-sm font-semibold text-slate-900">{item.description}</div>
                                        <div className="text-xs text-slate-400 mt-0.5">{item.subtext}</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="px-2.5 py-1 text-[10px] font-bold bg-slate-100 text-slate-500 rounded-md uppercase">
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className={`flex items-center gap-1.5 text-[11px] font-bold uppercase ${item.type === 'INCOME' ? 'text-emerald-500' : 'text-rose-500'
                                            }`}>
                                            <span>{item.type === 'INCOME' ? '↑' : '↓'}</span> {item.type}
                                        </div>
                                    </td>
                                    <td className={`px-6 py-5 text-sm font-bold text-right ${item.amount > 0 ? 'text-emerald-600' : 'text-slate-900'
                                        }`}>
                                        {item.amount > 0 ? `+$${item.amount.toLocaleString()}` : `-$${Math.abs(item.amount).toLocaleString()}`}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">

                        {/* Left side: Showing Text */}
                        <p className="text-xs font-medium text-slate-400">
                            Showing -10 of 4,284 transactions
                        </p>

                        {/* Right side: Navigation Buttons */}
                        <div className="flex items-center gap-2">
                            {/* Back Arrow */}
                            <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>

                            {/* Numbered Buttons */}
                            <div className="flex items-center gap-1">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1C1F2E] text-white text-xs font-bold shadow-sm">1</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 text-xs font-bold transition-all">2</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 text-xs font-bold transition-all">3</button>
                                <span className="px-1 text-slate-300 text-xs font-bold">...</span>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 text-xs font-bold transition-all">429</button>
                            </div>

                            {/* Forward Arrow */}
                            <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>


                </div>



            </div>

            {/* 4. BOTTOM SUMMARY CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 ml-10">
                {/* Income Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 border-l-4 border-l-emerald-500 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Total Monthly Income</p>
                    <h3 className="text-3xl font-bold text-emerald-600">$642,390.00</h3>
                </div>

                {/* Expense Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 border-l-4 border-l-rose-500 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Total Monthly Expenses</p>
                    <h3 className="text-3xl font-bold text-slate-900">$98,440.00</h3>
                </div>

                {/* Net Cash Card */}
                <div className="bg-[#1C1F2E] p-6 rounded-2xl shadow-lg mr-10">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Net Cash Flow</p>
                    <h3 className="text-3xl font-bold text-white">+$543,950.00</h3>
                </div>
            </div>

        </div>

    )

};
export default TransactionsTable;