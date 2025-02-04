import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const options = [
  { icon: require("../assets/switch_account.png"), label: "Switch Account" },
  { icon: require("../assets/google.png"), label: "Google Account" },
  { icon: require("../assets/incognito.png"), label: "Turn on Incognito" },
  { icon: require("../assets/share.png"), label: "Share Channel" },
];

const OptionsTab = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      <View style={styles.container}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Image source={option.icon} style={styles.icon} />
            <Text style={styles.buttonText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#121212",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  scrollView: {
    flexDirection: "row",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#3c3c3c",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginHorizontal: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});

export default OptionsTab;
