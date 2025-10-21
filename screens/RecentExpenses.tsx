import ExpensesOutput from '@/components/Expenses/ExpensesOutput';
import { ExpenseContext } from '@/store/expenses-context';
import { getDateMinusDays } from '@/utils/date';
import React, { useContext } from 'react';

const RecentExpenses = () => {
    const ctx = useContext(ExpenseContext);

    const recentExpenses = ctx.expenses.filter(expense => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return (expense.date >= date7DaysAgo) && (expense.date <= today);
    })

    return <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod='Last 7 Days'
        fallbackText='No Expenses Registered for the last 7 days.' />
}

export default RecentExpenses