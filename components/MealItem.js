import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "./MealDetails";

function MealItem ({title,duration,image,complexity,affordability, onPress,navigation}) {

   
    return(
     <View style={styles.container}>
        <Pressable 
                     style={({ pressed}) => pressed ? styles.buttonPressed : null}
                android_ripple={{color: '#ccc'}}
                   onPress={onPress}
                   >
        <View style={styles.innerContainer}>
            <View>
              <Image source={{ uri: image }} style={styles.image} />
              <Text style={styles.title}>{title}</Text>
              {/* <Text style={styles.duration}>{duration} Mins</Text> */}
            </View>
            <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
        </Pressable>
     </View>
    )
}
export default MealItem;

const styles = StyleSheet.create({
    container:{
        borderRadius: 8,
        overflow: "hidden",
        margin: 16,
        backgroundColor: "#fff",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.36,
    },
    innerContainer:{
        overflow: "hidden",
        borderRadius: 8,
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
    image:{
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
  
    buttonPressed:{
        opacity: 0.5,
    },
})