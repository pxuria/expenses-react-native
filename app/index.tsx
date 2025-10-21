import IconButton from "@/components/UI/IconButton";
import { GlobalStyles } from "@/constants/styles";
import AllExpenses from "@/screens/AllExpenses";
import ManageExpense from "@/screens/ManageExpense";
import RecentExpenses from "@/screens/RecentExpenses";
import ExpensesContextProvider from "@/store/expenses-context";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon='add'
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }} />
        )
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" color={color} size={size} />
        }} />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} />

        }} />
    </BottomTabs.Navigator>
  );
}

export default function RootLayout() {

  return (
    <>
      <StatusBar barStyle='light-content' />
      <ExpensesContextProvider>

        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white'
          }}>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              // title: 'Manage Expense',
              presentation: 'modal'
            }}
          />
        </Stack.Navigator>
      </ExpensesContextProvider>
    </>
  );
}
