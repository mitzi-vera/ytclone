import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const historyData = [
  {
    id: 1,
    title: "Create YouTube Clone Using React JS | Build Complete...",
    channel: "GreatStack",
    duration: "3:08:34",
    thumbnail: "https://i.ytimg.com/an_webp/Zb1zVeXLUf8/mqdefault_6s.webp?du=3000&sqp=CJSXhL0G&rs=AOn4CLDk4CxkipJ2XWD_8FnWjagXZ4C0Ng"
  },
  {
    id: 2,
    title: "Minimum Level for Every Hero Equipment in Clash of...",
    channel: "iTzu [ENG] - Clash of Clans",
    duration: "12:05",
    thumbnail: "https://i.ytimg.com/an_webp/z1ogwtAEQvY/mqdefault_6s.webp?du=3000&sqp=CKC1hL0G&rs=AOn4CLBDp867J1oe7A3hjldyetwJlYfYIg",
  },
  {
    id: 3,
    title: "New Epic Equipment and All Events in February in Clash...",
    channel: "iTzu [ENG] - Clash of Clans",
    duration: "8:19",
    thumbnail: "https://i.ytimg.com/an_webp/Z8zP77FxuEs/mqdefault_6s.webp?du=3000&sqp=CKGqhL0G&rs=AOn4CLAeV3V2OSN5mlWoI9c-W6QGeR5d0g",
  },
];

export default function HistoryPage() {
  return (
    <>
    <Text style={styles.text}> History </Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
      {historyData.map((video) => (
        <TouchableOpacity key={video.id} style={styles.videoCard}>
          <View style={styles.thumbnailContainer}>
            <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
            <View style={styles.durationContainer}>
              <Text style={styles.durationText}>{video.duration}</Text>
            </View>
          </View>
          <View style={styles.videoInfo}>
            <Text style={styles.title} numberOfLines={2}>{video.title}</Text>
            <Text style={styles.channel}>{video.channel}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 3,
  },
  scrollContainer: {
    padding: 10,
    backgroundColor: "#000",
  },
  videoCard: {
    width: 180, // Adjust width to fit nicely
    marginRight: 10,
  },
  thumbnailContainer: {
    position: "relative",
  },
  thumbnail: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  durationContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  durationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  videoInfo: {
    marginTop: 5,
  },
  title: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  channel: {
    color: "#aaa",
    fontSize: 10,
  },
});
