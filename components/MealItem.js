import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem ({title,duration,image,complexity,affordability, onPress}) {
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
     
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration} Mins</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
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
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',

    },
   detailItem:{
        marginHorizontal: 4,
        fontSize: 12,
    },
    buttonPressed:{
        opacity: 0.5,
    },
})