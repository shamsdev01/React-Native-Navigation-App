import { StyleSheet,FlatList } from "react-native";
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from "../components/CategoryGridTile";
import SafeView from "../components/ui/SafeView";

function renderCategoryItem(itemData){
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
    )
}

function CategoriesScreen () {
    return( 
        <SafeView>
            <FlatList
                data= {CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </SafeView>
    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
 
});

