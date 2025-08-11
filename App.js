import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './MealDetailsScreen';
import FavouritesScreen from './screens/FavouritesScreen'
import FavouriteContextProvider from './store/contex/favourites-context';

const Stack = createNativeStackNavigator(); 
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
    <Drawer.Navigator
    screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
             headerTintColor: 'white',
             sceneStyle: { backgroundColor: '#3f2f25' },
             drawerContentStyle:{backgroundColor : '#3f2f25'},
             drawerInactiveTintColor: 'white',
             drawerActiveTintColor: '#ecbea3ff',
             drawerActiveBackgroundColor:'#645e4eff'
      }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({color,size}) =>(
          <Ionicons name='list' color={color} size={size} />
        )
      }}/>
      <Drawer.Screen name='Favourites' component={FavouritesScreen} options={{
        drawerIcon: ({color,size}) =>(
          <Ionicons name='star' color={color} size={size} />
        )
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
    <StatusBar style='light'/> 
    <FavouriteContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
             headerTintColor: 'white',
             contentStyle: { backgroundColor: '#3f2f25' }
      }}>
        <Stack.Screen name="MealsCategories" component={DrawerNavigator} 
        options={{
          //  title: 'All Categories',
           headerShown:false,
         }} />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
     
          />
          <Stack.Screen
          name='MealDetail'
          component={MealDetailsScreen} 
          options={{
            title:'About the Meal'
          }}
          />
      </Stack.Navigator> 
    </NavigationContainer>
    </FavouriteContextProvider>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  }, 
});
