import Button from "@/components/UI/Button";
import IconButton from "@/components/UI/IconButton";
import { GlobalStyles } from "@/constants/styles";
import { ExpenseContext } from "@/store/expenses-context";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

const ManageExpense = ({ route, navigation }) => {
    const ctx = useContext(ExpenseContext);
    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [isEditing, navigation])

    function deleteExpenseHandler() {
        ctx.deleteExpense(expenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if (isEditing) {
            ctx.updateExpense(expenseId,
                {
                    description: 'Testttt',
                    amount: 91.9,
                    date: new Date('2025-01-04')
                });
        } else {
            ctx.addExpense({
                description: '1231eqw',
                amount: 91.9,
                date: new Date('2025-01-04')
            });
        }
        navigation.goBack();

    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button mode='flat' onPress={cancelHandler} style={styles.button}>Cancel</Button>
                <Button onPress={confirmHandler} style={styles.button}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon='trash'
                        color={GlobalStyles.colors.error500}
                        size={24}
                        onPress={deleteExpenseHandler} />
                </View>
            )}
        </View>
    )
}

export default ManageExpense

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
});