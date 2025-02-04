import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const sections = [
  {
    items: [
      { icon: require("../assets/videos.png"), label: "Your Videos" },
      { icon: require("../assets/downloads.png"), label: "Downloads" },
    ],
  },
  {
    items: [
      { icon: require("../assets/movies.png"), label: "Your Movies & TV" },
      { icon: require("../assets/ytpremium.png"), label: "Get YouTube Premium" },
    ],
  },
  {
    items: [
      { icon: require("../assets/time.png"), label: "Time Watched" },
      { icon: require("../assets/help.png"), label: "Help & Feedback" },
    ],
  },
];

const ProfileOptions = () => {
  return (
    <View style={styles.container}>
      {sections.map((section, sectionIndex) => (
        <View key={sectionIndex}>
          {section.items.map((option, index) => (
            <TouchableOpacity key={index} style={styles.optionButton}>
              <Image source={option.icon} style={styles.icon} />
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
          {/* Divider between sections */}
          {sectionIndex !== sections.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  optionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 8,
  },
});

export default ProfileOptions;
