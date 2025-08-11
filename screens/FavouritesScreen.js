import { useContext } from "react";
import { StyleSheet,View,Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavouriteContext } from "../store/contex/favourites-context";
import { MEALS } from "../data/dummy-data";


function FavouritesScreen ({navigation}) {
    const favouriteMealsCtx = useContext(FavouriteContext);
    const favouriteMeals = MEALS.filter(meal => favouriteMealsCtx.ids.includes(meal.id) )

        if (favouriteMeals.length ===0){
            return(
                <View style={styles.rootContainer}>
                    <Text style={styles.text}>You Have No Favourite Meals Yet</Text>
                </View>
            )
        }

    return(
        <MealsList items={favouriteMeals} navigation={navigation}/>
    )
}
export default FavouritesScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }

})