import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import {
  FiDollarSign,
  FiHome,
  FiZap,
  FiBell,
  FiSearch,
  FiChevronDown,
  FiSettings,
  FiHelpCircle,
  FiPlus,
  FiMenu,
  FiX,
} from "react-icons/fi";

import MainRoutes from "./routes/MainRoutes";

function App() {
  // State to manage mobile sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close sidebar when a link is clicked (Mobile only)
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="flex min-h-screen bg-[#FAFAFB] font-sans text-[#1C1F2E]">

      {/* 1. MOBILE OVERLAY */}
      {/* This darkens the background when the sidebar is pulled out on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* 2. ASIDE (SIDEBAR) */}
      <aside className={`
        fixed h-full w-[280px] bg-white flex flex-col p-8 z-50 transition-all duration-300 border-r border-slate-50
        ${isOpen ? "left-0" : "-left-[280px]"} 
        lg:left-0
      `}>
        {/* Mobile Close Button */}
        <button
          onClick={closeSidebar}
          className="lg:hidden absolute right-6 top-6 text-slate-400 hover:text-slate-900"
        >
          <FiX size={20} />
        </button>

        {/* Logo Area */}
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-[#1C1F2E] rounded-lg flex items-center justify-center text-white font-bold italic">F</div>
          <h1 className="text-xl font-bold tracking-tight">FinTrack</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/overview"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? "bg-[#1C1F2E] text-white shadow-md" : "text-slate-400 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            <FiHome className="text-lg" /> Dashboard Overview
          </NavLink>

          <NavLink
            to="/transaction"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? "bg-[#1C1F2E] text-white shadow-md" : "text-slate-400 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            <FiDollarSign className="text-lg" /> Transactions
          </NavLink>

          <NavLink
            to="/insights"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? "bg-[#1C1F2E] text-white shadow-md" : "text-slate-400 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            <FiZap className="text-lg" /> Insights
          </NavLink>
        </nav>

        {/* BOTTOM SECTION */}
        <div className="mt-auto flex flex-col gap-1">
          <NavLink
            to="/settings"
            onClick={closeSidebar}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-all"
          >
            <FiSettings className="text-lg" /> Settings
          </NavLink>

          <NavLink
            to="/support"
            onClick={closeSidebar}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-all"
          >
            <FiHelpCircle className="text-lg" /> Support
          </NavLink>

          <button className="mt-4 flex items-center justify-center gap-2 w-full bg-[#1C1F2E] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg hover:bg-slate-800 transition-all active:scale-[0.98]">
            <FiPlus className="text-lg" /> Add Transaction
          </button>
        </div>
      </aside>

      {/* 3. RIGHT SIDE WRAPPER */}
      {/* 'lg:ml-[280px]' ensures the margin only exists when the sidebar is visible on desktop */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-[280px]">

        {/* 4. HEADER */}
        {/* 4. HEADER */}
        <header className="h-20 bg-white flex items-center justify-between px-4 sm:px-6 lg:px-10 sticky top-0 z-10 border-b border-slate-50">

          {/* Left Section: Menu + Search */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1">

            {/* Hamburger Button - Only visible on Mobile */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-[#1C1F2E] p-2 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
            >
              <FiMenu size={24} />
            </button>

            {/* Search Input - Hidden on mobile, shows on 'sm' (640px+) */}
            <div className="relative w-full max-w-sm hidden sm:block">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search data..."
                className="w-full bg-slate-100 border-transparent rounded-2xl pl-10 pr-4 py-2 text-sm focus:bg-white focus:border-slate-200 outline-none transition-all"
              />
            </div>

            {/* Mobile Search Icon - Only shows when the input above is hidden */}
            <button className="sm:hidden p-2 text-slate-400 hover:text-slate-900">
              <FiSearch size={20} />
            </button>
          </div>

          {/* Right Section: Notifications + Profile */}
          <div className="flex items-center gap-3 lg:gap-6">

            {/* Notification Bell */}
            <button className="relative text-slate-400 hover:text-slate-900 transition-colors p-1">
              <FiBell className="text-xl" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Profile Section */}
            <div className="flex items-center gap-2 sm:gap-3 pl-3 sm:pl-4 lg:pl-6 border-l border-slate-100">

              {/* User Text - Hidden on small mobile (xs), shows on sm+ */}
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-bold text-[#1C1F2E] bg-[#1C1F2E]/5 px-2 py-0.5 rounded mb-0.5 uppercase tracking-wider">
                  Admin
                </p>
                <p className="text-[11px] text-slate-400 font-medium tracking-tight whitespace-nowrap">
                  Ketan M.
                </p>
              </div>

              {/* Avatar */}
              <img
                src="https://ui-avatars.com/api/?name=Ketan&background=1C1F2E&color=fff"
                alt="User"
                className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-slate-100 shrink-0"
              />

              {/* Down Arrow - Hidden on mobile */}
              <FiChevronDown className="text-slate-400 cursor-pointer hidden md:block" />
            </div>
          </div>
        </header>

        {/* 5. MAIN CONTENT */}
        <main className="p-6 lg:p-10">
          <MainRoutes />
        </main>
      </div>

    </div>
  );
}

export default App;