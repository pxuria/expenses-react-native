import { createContext, useReducer } from "react";

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

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    updateExpense: (id, { description, amount, date }) => { },
    deleteExpense: (id) => { },
});

function expenseReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id }, ...state]
        case 'UPDATE':
            const expenseIndex = state.findIndex(expense => expense.id === action.payload.id);
            const updatableExpense = state[expenseIndex];

            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[expenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter(expense => expense.id !== action.payload)

        default:
            return state;
    }
}

export default function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_DATA);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }
    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    };

    return (
        <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
    );
}