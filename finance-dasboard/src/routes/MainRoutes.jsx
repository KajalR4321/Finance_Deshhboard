import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TransactionsTable from '../compnents/transection/Transection'
import FinancialInsights from '../compnents/financialInsight/Financial'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<h1>overview</h1>} />
            <Route path='/transaction' element={<TransactionsTable />} />
            <Route path='/insights' element={< FinancialInsights />} />

        </Routes>
    )
}

export default MainRoutes
