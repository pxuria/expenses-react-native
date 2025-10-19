import { FlatList, Text } from "react-native";

function renderExpenseItem({ itemData }) {
    return (
        <Text>{itemData.index.description}</Text>
    )
}

export default function ExpensesList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}
            renderItem={renderExpenseItem}
        />
    )
}
