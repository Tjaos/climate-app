import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Image } from "react-native-elements";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.topContent}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="place"
              size={20}
              color={"rgb(103,113,167)"}
              style={{ paddingLeft: 10 }}
            />
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Localização
            </Text>
          </View>
          <View>
            <Icon
              name="notifications"
              size={20}
              color={"rgb(103,113,167)"}
              style={{ paddingRight: 20 }}
            />
          </View>
        </View>
        <View style={styles.midContent}>
          <Image
            style={{ height: 100, width: 100 }}
            source={require("../assets/cloud.png")}
          />
          <Text style={{ fontSize: 80, fontWeight: "bold", color: "#fff" }}>
            26°
          </Text>
          <Text style={{ color: "#fff", fontSize: 16 }}>precipitacions</Text>
          <Text style={{ color: "#fff", fontSize: 16 }}>Max.:31° Min.:25°</Text>
        </View>
        <View style={styles.botContent}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              width: "90%",
              height: 50,
              backgroundColor: "#5F9F9F",
              alignItems: "center",
              padding: 10,
              borderRadius: 23,
            }}
          >
            <Text style={{ color: "#fff" }}>16%</Text>
            <Text style={{ color: "#fff" }}>90%</Text>
            <Text style={{ color: "#fff" }}>10km/h</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              width: "90%",
              height: 200,
              backgroundColor: "#5F9F9F",
              borderRadius: 23,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "column",
                padding: 15,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>Today</Text>
                <Text style={{ color: "#fff" }}>Out,27</Text>
              </View>
              <View 
              style={{
                justifyContent:"space-between",
                flexDirection:"row"
                }}>
                <View
                  style={{
                    paddingTop: 20,
                    justifyContent: "space-between",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 50,
                    height: "80%",
                  }}
                >
                  <Text style={{color:'#fff'}}>31°C</Text>
                  <Icon name="cloud" size={25} color={'#fff'} />
                  <Text style={{color:'#fff'}}>15:00</Text>
                </View>
                <View
                  style={{
                    paddingTop: 20,
                    justifyContent: "space-between",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 50,
                    height: "80%",
                  }}
                >
                  <Text style={{color:'#fff'}}>31°C</Text>
                  <Icon name="cloud" size={25} color={'#fff'} />
                  <Text style={{color:'#fff'}}>15:00</Text>
                </View>
                <View
                  style={{
                    paddingTop: 20,
                    justifyContent: "space-between",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 50,
                    height: "80%",
                  }}
                >
                  <Text style={{color:'#fff'}}>31°C</Text>
                  <Icon name="cloud" size={25} color={'#fff'} />
                  <Text style={{color:'#fff'}}>15:00</Text>
                </View>
                <View
                  style={{
                    paddingTop: 20,
                    justifyContent: "space-between",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 50,
                    height: "80%",
                  }}
                >
                  <Text style={{color:'#fff'}}>31°C</Text>
                  <Icon name="cloud" size={25} color={'#fff'} />
                  <Text style={{color:'#fff'}}>15:00</Text>
                </View>
                
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    height: "100%",
    width: "100%",
  },
  topContent: {
    marginTop: 16,
    marginLeft: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  midContent: {
    marginTop: "10%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  botContent: {
    flexDirection: "column",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: "100%",
  },
  background: {
    height: "100%",
    backgroundColor: "#ADD8E6",
    paddingTop: 40,
  },
});
