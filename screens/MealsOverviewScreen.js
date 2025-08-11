import {useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";  
import MealItem from "../components/MealsList/MealItem";
import MealDetailsScreen from "../MealDetailsScreen";
import MealsList from "../components/MealsList/MealsList";


function MealsOverviewScreen({route,navigation}){

 const catId = route.params.categoryId;

 const displayedMeals = MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId) >= 0;
 })

   useLayoutEffect(() => {
      const categoryTitle =CATEGORIES.find(
         (category) => category.id === catId 
      ).title;

       
 navigation.setOptions({
   title: categoryTitle
 })
   },[catId,navigation])



return(
   <MealsList items={displayedMeals} navigation={navigation}/>
)

  // The above line filters the meals based on the category ID passed from the previous screen

}
export default MealsOverviewScreen;


