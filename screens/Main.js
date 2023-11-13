import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Image } from "react-native-elements";
import { SelectList } from "react-native-dropdown-select-list";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import clear_day from "../assets/image/clear_day.png";
import clear_night from "../assets/image/clear_night.png";
import cloud from "../assets/image/cloud.png";
import cloudly_day from "../assets/image/cloudly_day.png";
import cloudly_night from "../assets/image/cloudly_night.png";
import fog from "../assets/image/fog.png";
import hail from "../assets/image/hail.png";
import none_day from "../assets/image/none_day.png";
import none_night from "../assets/image/none_night.png";
import rain from "../assets/image/rain.png";
import snow from "../assets/image/snow.png";
import storm from "../assets/image/storm.png";

export default function Main() {
  const [selectedCity, setSelectedCity] = useState("Recife");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "d47ca23c";

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
  const conditionImage = {
    clear_day: clear_day,
    cloud: cloud,
    clear_night: clear_night,
    cloudly_day: cloudly_day,
    cloudly_night: cloudly_night,
    fog: fog,
    hail: hail,
    none_day: none_day,
    none_night: none_night,
    rain: rain,
    snow: snow,
    storm: storm,
  };
  const condition_slug = weatherData?.results?.condition_slug || null;
  // console.log("condition_slug:", condition_slug);

  const data = [
    { key: "1", value: "Recife" },
    { key: "2", value: "Jaboatão dos Guararapes" },
    { key: "3", value: "Gravatá" },
    { key: "4", value: "Caruaru" },
    { key: "5", value: "João Pessoa" },
    { key: "6", value: "Garanhuns" },
    { key: "7", value: "Igarassu" },
    { key: "8", value: "São Paulo" },
  ];
  const isDayTime = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 6 && currentHour < 18;
  };
  const imagePath = conditionImage[condition_slug];
  //console.log("imagePath:", typeof(imagePath));

  return (
    <ScrollView style={styles.container}>
      <View
        style={[
          styles.background,
          { backgroundColor: isDayTime() ? "#87CEFA" : "#191970" },
        ]}
      >
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
              boxStyles={{ borderRadius: 25, marginVertical: 8, columnGap: 5 }}
              inputStyles={{
                color: isDayTime() ? "gray" : "white",
                fontWeight: "bold",
                fontSize: 14,
              }}
              dropdownTextStyles={{
                color: isDayTime() ? "gray" : "white",
                fontWeight: "bold",
              }}
              defaultOption={{ key: "1", value: "Recife" }}
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
            source={imagePath}
            onError={(error) =>
              console.error("Erro ao carregar imagem:", error)
            }
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
              height: 80,
              backgroundColor: "#5F9F9F",
              alignItems: "center",
              padding: 10,
              borderRadius: 23,
            }}
          >
            <Text style={{ color: "#fff" }}>
              <Image
                style={{ height: 20, width: 20, paddingRight: 5 }}
                source={require("../assets/image/rain_probability.png")}
              />
              {weatherData &&
                weatherData.results &&
                weatherData.results.forecast[0].rain_probability}
              %
            </Text>
            <Text style={{ color: "#fff" }}>
              <Image
                style={{ height: 20, width: 20, paddingRight: 5 }}
                source={require("../assets/image/humidity.png")}
              />
              {weatherData &&
                weatherData.results &&
                weatherData.results.humidity}
              %
            </Text>
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
                <Text style={{ color: "#fff" }}> Amanhã </Text>
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
                <Text style={{ color: "#fff" }}>
                  {" "}
                  {weatherData &&
                    weatherData.results &&
                    weatherData.results.forecast[1].description}
                </Text>
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
