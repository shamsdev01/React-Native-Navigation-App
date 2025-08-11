import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "./data/dummy-data";
import MealDetails from "./components/MealDetails";
import Subtitle from "./components/MealDetail/Subtitle";
import List from "./components/MealDetail/List";
import { useLayoutEffect, useContext } from "react";
import IconButton from "./components/IconButton";
import { FavouriteContext } from "./store/contex/favourites-context";



function MealDetailsScreen ({route,navigation}) {
    const mealId = route.params.mealId;
    const favouriteMealsCtx = useContext(FavouriteContext);
    
    const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        if (mealIsFavourite) {
            favouriteMealsCtx.removeFavourite(mealId);
        } else {
            favouriteMealsCtx.addFavourite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return(
                    <IconButton 
                        icon={mealIsFavourite ? "star" : "star-outline"} 
                        color='#e2b497' 
                        onPress={headerButtonPressHandler}
                    />
                )
            }
        })
    },[navigation,headerButtonPressHandler,mealIsFavourite]);

    return(
        <ScrollView>
            <Image
            style={styles.image}
            source={{uri: selectedMeal.imageUrl}}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText}
            />
              <View style={styles.listOuterContainer}>
                 <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
                </View>
                </View>
        </ScrollView>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
     rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },

})