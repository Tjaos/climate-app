import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Image } from "react-native-elements";

export default function Main() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(56,176,222,0.8)", "transparent"]}
        style={styles.background}
      >
        <View style={styles.top}>
          <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
            <Icon name="place" size={20} color={"rgb(103,113,167)"} style={{padding:5}} />
            <Text style={{fontSize:14, fontWeight:"bold",}}>Localização</Text>
          </View>
          <View>
            <Icon
              name="notifications"
              size={20}
              color={"rgb(103,113,167)"}
              style={{padding:8}}
            />
          </View>
        </View>
        <View style={styles.mid}>
        <Image
        style={{height:80, width:80}}
        source={require('../assets/cloud.png')
        }
      />
      <Text style={{fontSize:80, fontWeight:"bold", color:'#fff'}}>28°</Text>
      <Text style={{color:'#fff'}}>precipitacions</Text>
      <Text style={{color:'#fff'}}>Max.:31° Min.:25°</Text>
        </View>
        <View style={styles.bot}>
          <View style={{flexDirection:"row", justifyContent:"space-between" }}>
            <Text>
              6
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    padding: 0,
    height: "100%",
    width: "100%",
  },
  top: {
    marginTop: 16,
    marginLeft: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mid: {
    marginTop: "10%",
    height: "30%",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"
  },
  bot: {
    marginBottom: "10%",
    height: "30%",
  },
  background: {
    height: "100%",
  },
});
