import { StatusBar, StyleSheet, Text, View } from "react-native"

export default function Setting() {
    return (
        <View style={styles.container}>
            <View style={styles.Card}>
                <Text>新增任務</Text>
                <Text>任務標題</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        container: {
            backgroundColor: "#ffffff",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: StatusBar.currentHeight,
            paddingHorizontal: 20,
        },
    },
    Card: {
        position:"fixed",
        
        top:"10%",
        left:"10%",
        backgroundColor:"#fff",
        width: "80%",
        height: "80%",
        borderRadius:20,
    },
})