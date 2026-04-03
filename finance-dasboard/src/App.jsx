
import { Routes, Route, NavLink } from "react-router-dom";
import { FiDollarSign, FiHome, FiZap, FiBell, FiSearch, FiChevronDown } from "react-icons/fi";

import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="flex min-h-screen bg-[#FAFAFB] font-sans text-[#1C1F2E]">

      {/* 1. ASIDE (SIDEBAR) */}
      <aside className="w-[280px]   bg-white flex flex-col p-8 fixed h-full">
        {/* Logo Area */}
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-[#1C1F2E] rounded-lg flex items-center justify-center text-white font-bold italic">F</div>
          <h1 className="text-xl font-bold tracking-tight">FinTrack</h1>

        </div>


        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          <NavLink to="/overview" className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? "bg-[#1C1F2E] text-white shadow-md" : "text-slate-400 hover:bg-slate-50 hover:text-slate-900"}`
          }>
            <FiHome className="text-lg" /> DashboardOverview
          </NavLink>

          <NavLink to="/transaction" className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? "bg-[#1C1F2E] text-white shadow-md" : "text-slate-400 hover:bg-slate-50 hover:text-slate-900"}`
          }>
            <FiDollarSign className="text-lg" /> Transactions
          </NavLink>

          <NavLink to="/insights" className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? "bg-[#1C1F2E] text-white shadow-md" : "text-slate-400 hover:bg-slate-50 hover:text-slate-900"}`
          }>
            <FiZap className="text-lg" /> Insights
          </NavLink>
        </nav>




      </aside>

      {/* RIGHT SIDE WRAPPER */}
      <div className="flex-1 ml-[280px] flex flex-col">

        {/* 2. HEADER */}
        <header className="h-20 bg-white  flex items-center justify-between px-10 sticky top-0 z-10">
          {/* Search Input */}
          <div className="relative w-full max-w-sm">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search data..."
              className="w-full bg-slate-100  border-transparent rounded-2xl pl-10 pr-4 py-2 text-sm focus:bg-white focus:border-slate-200 outline-none transition-all"
            />
          </div>

          {/* User Profile & Notifications */}
          <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-slate-900 transition-colors">
              <FiBell className="text-xl" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
              <div className="text-right">
                <p className="text-xs font-bold text-[#1C1F2E] bg-[#1C1F2E]/5 px-2 py-0.5 rounded mb-0.5">Admin</p>
                <p className="text-[11px] text-slate-400 font-medium tracking-tight">Ketan M.</p>
              </div>
              <img src="https://ui-avatars.com/api/?name=Ketan&background=1C1F2E&color=fff" alt="User" className="w-9 h-9 rounded-full border border-slate-100" />
              <FiChevronDown className="text-slate-400 cursor-pointer" />
            </div>
          </div>
        </header>

        {/* 3. MAIN CONTENT (where your routes load) */}
        <main className="p-10">
          <MainRoutes />
        </main>
      </div>

    </div>
  );
}

export default App;
