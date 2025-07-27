import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'


function CategoryGridTile  ({title, color, onPress}) {
  return (

    <View style={styles.gridItem}>
        <Pressable 
        style={({ pressed }) => [styles.button, 
            pressed && styles.buttonPressed]}
         android_ripple={{color: '#ccc'}}
            onPress={onPress}
            >
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
 
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    },
    button:{
        flex:1,
    },
    buttonPressed:{
        opacity: 0.5,
    },
    innerContainer:{
        flex:1,
        padding: 16,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})