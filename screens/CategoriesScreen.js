import { StyleSheet,FlatList } from "react-native";
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from "../components/CategoryGridTile";


function CategoriesScreen ({navigation}) {


function renderCategoryItem(itemData){
    function pressHandler(){
        // console.log('Pressed!');
        navigation.navigate('MealsOverview',{
            categoryId: itemData.item.id,
        })
    }

    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    )
}


    
    return( 

            <FlatList
                data= {CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
                
            />
    
    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
 
});

