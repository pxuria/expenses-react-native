import ExpensesOutput from "@/components/Expenses/ExpensesOutput"
import { ExpenseContext } from "@/store/expenses-context"
import { useContext } from "react"

const AllExpenses = () => {
    const ctx = useContext(ExpenseContext)
    return <ExpensesOutput expenses={ctx.expenses} expensesPeriod='Total' />
}

export default AllExpenses