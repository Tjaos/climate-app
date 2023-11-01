import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Image } from "react-native-elements";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function Main() {

  const [selected, setSelected ] = useState("");

  const data = [
    {key:'1', value:'Recife'},
    {key:'2', value:'Jaboatão dos Guararapes'},
    {key:'3', value:'Gravatá'},
    {key:'4', value:'Caruaru'},
    {key:'5', value:'João Pessoa'},
    {key:'6', value:'Garanhuns'},
    {key:'7', value:'Igarassu'},

  ]
  return (
    <ScrollView style={styles.container}>
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
            <SelectList style={{ fontSize: 14, fontWeight: "bold" }}
              setSelected={(val => setSelected(val))}
              data={data}
              save="value"
            />
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
          <Text style={{ fontSize: 60, fontWeight: "400", color: "#fff" }}>
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
          <View style={{
              marginTop: 20,
              marginBottom:20,
              width: "90%",
              height: 200,
              backgroundColor: "#5F9F9F",
              borderRadius: 23,
            }}>
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
                <Text style={{ fontWeight: "bold", color: "#fff" }}>Next Forecast</Text>
                <Icon name="event" size={25} color={'#fff'} />
              </View>
              <View 
              style={{
                justifyContent:"space-between",
                flexDirection:"row",
                paddingTop:20
                }}>
                  <Text style={{color:'#fff'}}>Monday</Text>
                  <Icon name="grain" size={25} color={'#fff'} />
                  <Text style={{color:'#fff'}}>13°c  <Text style={{color:'#c0c0c0'}} >10°c</Text></Text>
               
                
              </View>
            </View>
          </View>

          
        </View>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 1,
    width: "100%",
  },
  topContent: {
    marginTop: 16,
    marginLeft: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  midContent: {
    marginTop: "20%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  botContent: {
    flexDirection: "column",
    paddingTop: 30,
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
