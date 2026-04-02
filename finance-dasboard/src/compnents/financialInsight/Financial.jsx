import { FiTrendingUp, FiShield, FiZap, FiHome, FiPieChart, FiBell, FiDownload, FiCpu } from 'react-icons/fi';

const FinancialInsights = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20 px-4 md:px-0">

            {/* 1. TITLE & TOGGLE */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Deep Analysis</p>
                    <h1 className="text-3xl font-bold text-[#1C1F2E]">Financial Insights</h1>
                </div>

                <div className="flex bg-gray-100 p-1 rounded-xl w-fit self-start md:self-auto">
                    <button className="px-5 py-2 text-xs font-bold rounded-lg bg-white shadow-sm text-slate-900">Monthly</button>
                    <button className="px-5 py-2 text-xs font-bold rounded-lg text-slate-400 hover:text-slate-600 transition-colors">Quarterly</button>
                </div>
            </div>

            {/* 2. TOP BENTO GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart Card */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-50">
                    <div className="flex justify-between items-start mb-10">
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">Net Asset Trajectory</h3>
                            <p className="text-xs text-slate-400 mt-1">Tracking your liquidity versus fixed assets over time.</p>
                        </div>
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-100 px-2.5 py-1 rounded-full">
                            <FiTrendingUp /> +4.2%
                        </span>
                    </div>
                    <div className="flex items-end gap-2 md:gap-4 h-48 mb-10">
                        {[40, 55, 45, 70, 60, 85, 100].map((h, i) => (
                            <div key={i} className={`flex-1 rounded-t-xl transition-all ${i === 6 ? 'bg-[#1C1F2E]' : 'bg-slate-500'}`} style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-8 md:gap-16 border-t border-slate-100 pt-8">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Liquid Cash</p>
                            <p className="text-2xl font-bold text-slate-900">$142,850.00</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Fixed Assets</p>
                            <p className="text-2xl font-bold text-slate-900">$1,240,000.00</p>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar Bento Cards */}
                <div className="flex flex-col gap-6">
                    <div className="bg-[#064E3B] rounded-3xl p-7 text-white flex flex-col justify-between h-1/2 min-h-[180px]">
                        <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Capital Efficiency</p>
                        <div>
                            <h2 className="text-5xl font-bold mb-2">94.2</h2>
                            <p className="text-xs text-emerald-100/70 leading-relaxed">Your deployment of idle funds is in the top 5% of private users this month.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-50 h-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2.5 bg-slate-50 rounded-xl"><FiShield className="text-slate-400 text-lg" /></div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Risk Exposure</p>
                                <p className="text-xs font-bold text-[#1C1F2E] uppercase">Balanced</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                                <span className="text-slate-400">Diversification Index</span>
                                <span className="text-slate-900 font-black">8.2/10</span>
                            </div>
                            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="w-[82%] h-full bg-[#1C1F2E] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. STRATEGIC OBSERVATIONS */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <FiZap className="text-slate-900 text-xl" />
                    <h3 className="font-bold text-slate-900 text-lg">Strategic Observations</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ObservationCard icon={<FiHome />} label="Spending Analysis" title="Highest Spending Category: Rent (35%)" desc="Your housing costs are stable but account for a significant portion of your monthly outflow." />
                    <ObservationCard icon={<FiPieChart />} label="Performance" title="Monthly Comparison: 12% increase in savings vs last month" desc="Excellent progress. You've successfully lowered discretionary spending by $400." badge="Top Performer" />
                    <ObservationCard icon={<FiBell />} label="Attention Required" title="Subscription Alert: You have 3 recurring payments this week" desc="Totaling $189.97. Ensure your secondary account has sufficient balance." alert />
                </div>
            </div>

            {/* 4. FINAL SECTION: DISTRIBUTION & AI FORECAST */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Category Distribution */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="font-bold text-slate-900">Category Distribution</h3>
                        <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 hover:text-slate-900 transition-colors">
                            <FiDownload /> Export PDF
                        </button>
                    </div>
                    <div className="space-y-6">
                        <ProgressBar label="Housing & Utilities" amount="$3,200.00" color="bg-slate-900" width="w-[70%]" />
                        <ProgressBar label="Investment Contributions" amount="$2,500.00" color="bg-emerald-400" width="w-[55%]" />
                        <ProgressBar label="Lifestyle & Dining" amount="$1,400.00" color="bg-slate-200" width="w-[35%]" />
                    </div>
                </div>

                {/* AI Forecast Card */}
                <div className="bg-[#1C1F2E] rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-400/20 text-emerald-400 px-3 py-1 rounded-full mb-6">
                            <FiCpu className="text-xs" />
                            <span className="text-[9px] font-black uppercase tracking-widest">AI Forecast</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Quarterly Savings Projection</h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                            Based on your current trajectory, we project a 15.4% increase in total net worth by year-end. Maintain your savings rate to hit the $1.5M milestone by November.
                        </p>
                    </div>
                    <button className="relative z-10 w-fit mt-8 bg-white text-[#1C1F2E] px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-100 transition-all active:scale-95 shadow-lg">
                        Apply Strategy
                    </button>
                    {/* Abstract Grid Background Effect */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                </div>
            </div>
        </div>
    );
};

{/* Sub-components for cleaner code */ }
const ObservationCard = ({ icon, label, title, desc, alert, badge }) => (
    <div className="bg-white p-7 rounded-3xl shadow-sm border border-slate-50 flex flex-col justify-between hover:border-slate-200 transition-all group">
        <div>
            <div className="flex justify-between items-center mb-6">
                <div className={`p-3 rounded-2xl ${alert ? 'bg-rose-50 text-rose-500' : 'bg-slate-50 text-slate-400'}`}>{icon}</div>
                {badge && <span className="text-[9px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">{badge}</span>}
            </div>
            <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${alert ? 'text-rose-500' : 'text-slate-400'}`}>{label}</p>
            <h4 className="font-bold text-slate-900 text-sm mb-3 leading-snug">{title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
        </div>
        <button className="mt-8 text-[10px] font-bold text-slate-900 uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
            View Details <span className="text-slate-300">→</span>
        </button>
    </div>
);

const ProgressBar = ({ label, amount, color, width }) => (
    <div className="space-y-2">
        <div className="flex justify-between items-center text-[11px] font-bold">
            <span className="text-slate-900 uppercase tracking-tight">{label}</span>
            <span className="text-slate-500">{amount}</span>
        </div>
        <div className="w-full h-1.5 bg-slate-50 rounded-full">
            <div className={`${width} h-full ${color} rounded-full`}></div>
        </div>
    </div>
);

export default FinancialInsights;