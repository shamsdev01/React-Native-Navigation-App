import {useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";  
import MealItem from "../components/MealsList/MealItem";


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





  // The above line filters the meals based on the category ID passed from the previous screen

  function renderMealItem(itemData){
    function pressHandler(){
        navigation.navigate('MealDetail',{
         mealId: itemData.item.id
        })
    }

    return (
     <MealItem
       title={itemData.item.title}
        duration={itemData.item.duration}
        image={itemData.item.imageUrl}
         complexity={itemData.item.complexity}
         affordability={itemData.item.affordability}
         onPress={pressHandler}

     />
    )
  }
  return (
        <View style={styles.container}>
           <FlatList
           data={displayedMeals}
           keyExtractor ={(item) => item.id}
           renderItem={renderMealItem}
           />
        </View>
  )
}
export default MealsOverviewScreen;


const styles = StyleSheet.create({
   container:{
    flex: 1,
    padding: 16,
   }
});