import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function SafeView ({children}) {
    return(
        <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    );
}

export default SafeView;

const styles = StyleSheet.create({ 
    safeArea: {
        flex: 1,
    },
})