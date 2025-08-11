import { StyleSheet,View,FlatList } from "react-native";

import MealItem from "./MealItem";


function MealsList ({items, navigation}) {
    
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
           data={items}
           keyExtractor ={(item) => item.id}
           renderItem={renderMealItem}
           />
        </View>
  )
}

export default MealsList;

const styles = StyleSheet.create({
   container:{
    flex: 1,
    padding: 16,
   }
});