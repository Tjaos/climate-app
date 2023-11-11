import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Image } from "react-native-elements";
import { SelectList } from "react-native-dropdown-select-list";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import axios from "axios";

export default function Main() {
  const [selectedCity, setSelectedCity] = useState("Recife");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "3d8249e6";

  useEffect(() => {
    if (selectedCity) {
      const apiUrl = `https://api.hgbrasil.com/weather?key=${apiKey}&city_name=${encodeURIComponent(
        selectedCity
      )}`;

      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data;

          setWeatherData(data);
        })
        .catch((error) => {
          console.error("Erro ao obter dados de clima:", error);
        });
    }
    
  }, [selectedCity]);
  
  const handleCityChange = (value) => {
    setSelectedCity(value);
  };
  const condition_slug = weatherData?.results?.condition_slug || null;
  console.log("Condition Slug:", condition_slug);

  const data = [
    { key: "1", value: "Recife" },
    { key: "2", value: "Jaboatão dos Guararapes" },
    { key: "3", value: "Gravatá" },
    { key: "4", value: "Caruaru" },
    { key: "5", value: "João Pessoa" },
    { key: "6", value: "Garanhuns" },
    { key: "7", value: "Igarassu" },
  ];
  const isDayTime = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 6 && currentHour < 18;
  };
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.background, { backgroundColor: isDayTime() ? "#87CEFA" : "#191970" }]}>
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
            <SelectList
              style={{ fontSize: 14, fontWeight: "bold" }}
              setSelected={(val) => handleCityChange(val)}
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
            source={require(`../assets/cloud.png`)}
          />
          <Text style={{ fontSize: 60, fontWeight: "400", color: "#fff" }}>
            {weatherData && weatherData.results && weatherData.results.temp}°
          </Text>
          <Text style={{ color: "#fff", fontSize: 16 }}>
            {weatherData &&
              weatherData.results &&
              weatherData.results.description}
          </Text>
          <Text style={{ color: "#fff", fontSize: 16 }}>
            Max.:{" "}
            {weatherData &&
              weatherData.results &&
              weatherData.results.forecast[0].max}
            ° Min.:{" "}
            {weatherData &&
              weatherData.results &&
              weatherData.results.forecast[0].min}
            °
          </Text>
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
            <Text style={{ color: "#fff" }}>
              {weatherData &&
                weatherData.results &&
                weatherData.results.wind_speedy}
            </Text>
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
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  {weatherData &&
                    weatherData.results &&
                    weatherData.results.forecast[0].weekday}
                </Text>
                <Text style={{ color: "#fff" }}>
                  {weatherData &&
                    weatherData.results &&
                    weatherData.results.date}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
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
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[1].weekday}
                  </Text>
                  <Text style={{ color: "#fff" }}>
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[1].max}
                    °
                  </Text>
                  <Icon name="cloud" size={25} color={"#fff"} />
                  <Text style={{ color: "#fff" }}>
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[1].min}
                    °
                  </Text>
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
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[2].weekday}
                  </Text>
                  <Text style={{ color: "#fff" }}>
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[2].max}
                    °
                  </Text>
                  <Icon name="cloud" size={25} color={"#fff"} />
                  <Text style={{ color: "#fff" }}>
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[2].min}
                    °
                  </Text>
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
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[3].weekday}
                  </Text>
                  <Text style={{ color: "#fff" }}>
                    {" "}
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[3].max}
                    °
                  </Text>
                  <Icon name="cloud" size={25} color={"#fff"} />
                  <Text style={{ color: "#fff" }}>
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[3].min}
                    °
                  </Text>
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
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[4].weekday}
                  </Text>
                  <Text style={{ color: "#fff" }}>
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[4].max}
                    °
                  </Text>
                  <Icon name="cloud" size={25} color={"#fff"} />
                  <Text style={{ color: "#fff" }}>
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[4].min}
                    °
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
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
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  Próxima previsão
                </Text>
                <Icon name="event" size={25} color={"#fff"} />
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingTop: 20,
                }}
              >
                <Text style={{ color: "#fff" }}>  Amanhã  </Text>
                <Icon name="grain" size={25} color={"#fff"} />
                <Text style={{ color: "#fff" }}>
                  {weatherData &&
                    weatherData.results &&
                    weatherData.results.forecast[1].max}
                  °c{" "}
                  <Text style={{ color: "#c0c0c0" }}>
                    {weatherData &&
                      weatherData.results &&
                      weatherData.results.forecast[1].min}
                    °c
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingTop: 20,
                }}
              >
                <Text style={{ color: "#fff" }}>  {weatherData &&
                    weatherData.results &&
                    weatherData.results.forecast[1].description}</Text>
                <Text style={{ color: "#fff" }}>
                  {weatherData &&
                    weatherData.results &&
                    weatherData.results.forecast[1].wind_speedy}
                </Text>
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
    paddingTop: 40,
  },
});
