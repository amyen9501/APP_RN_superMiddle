import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Button from "../../../components/Button";

const list = [
  {
    id: 1,
    name: "John Doe",
    age: 30
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25
  },
  {
    id: 3,
    name: "Bob Smith",
    age: 40
  },
  {
    id: 4,
    name: "Alice Johnson",
    age: 35
  }
]


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.missionBox}>
        <LinearGradient
          colors={['#FFD1DC', '#D1C4E9', '#a28fff']}
          style={styles.missionBox}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={styles.missionText}>我的任務</Text>
          <View style={styles.missionState}>
            <View style={styles.missionStateBox}>
              <Text style={styles.missionStateBoxText}>全部</Text>
            </View>
            <View style={styles.missionStateBox}>
              <Text style={styles.missionStateBoxText}>進行中</Text>
            </View>
            <View style={styles.missionStateBox}>
              <Text style={styles.missionStateBoxText}>已完成</Text>
            </View>

          </View>
        </LinearGradient>

      </View>
      <ScrollView>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text>Name: {item.name}</Text>
              <Text>Age: {item.age}</Text>
            </View>
          )}
        />
      </ScrollView>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    //alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  missionBox: {
    backgroundColor: "#ffffff00",
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  missionText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  missionState: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginTop: 20,
  },
  missionStateBox: {
    width: "28%",
    height: "100%",
    backgroundColor: "#ffffff58",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  missionStateBoxText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#fff",
    width:"100%",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor:'#bcbbbb',
    marginBottom:15,
  }
});
