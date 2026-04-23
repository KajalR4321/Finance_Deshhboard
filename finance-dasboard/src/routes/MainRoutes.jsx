import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import DashboardOverview from '../compnents/dashboard/Dashboard';

import TransactionsTable from '../compnents/transection/Transection'
import FinancialInsights from '../compnents/financialInsight/Financial'

const MainRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/overview" />} /> */}
            <Route path='/overview' element={<DashboardOverview />} />
            <Route path='/transaction' element={<TransactionsTable />} />
            <Route path='/insights' element={< FinancialInsights />} />



        </Routes>
    )
}

export default MainRoutes;
