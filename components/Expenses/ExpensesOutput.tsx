import { View } from "react-native";
import ExpensesList from './ExpensesList';
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
    const DUMMY_DATA = [
        {
            id: '1',
            description: 'A book 1',
            amount: 14.5,
            date: new Date('2022-04-24')
        },
        {
            id: '2',
            description: 'A book 2',
            amount: 10.5,
            date: new Date('2022-04-24')
        },
        {
            id: '3',
            description: 'A book 3',
            amount: 27,
            date: new Date('2022-04-24')
        }
    ];

    return (
        <View>
            <ExpensesSummary expenses={DUMMY_DATA} periodName={expensesPeriod} />

            <ExpensesList expenses={DUMMY_DATA} />
        </View>
    )
}

export default ExpensesOutput