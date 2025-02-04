import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const historyData = [
  {
    id: 1,
    title: "Tailwind Crash Course | Project From Scratch",
    channel: "Traversy Media",
    duration: "1:35:38",
    thumbnail: "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    title: "Mastering Mobile Application Development - Course Overview",
    channel: "EC-Council Learning",
    duration: "4:59",
    thumbnail: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
  },
  {
    id: 3,
    title: "Iphone Airpods Max Unboxing & Review",
    channel: "AirplusBox",
    duration: "12:19",
    thumbnail: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function HistoryPage() {
  return (
    <View style ={styles.container}>
      <View style ={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <Text style={styles.text}> History </Text>
    <TouchableOpacity>
      <Text style={styles.viewAllText}>View all</Text>
    </TouchableOpacity>
      </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
      {historyData.map((video) => (
        <TouchableOpacity key={video.id} style={styles.videoCard}>
          <View style={styles.thumbnailContainer}>
            <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
            <View style={styles.durationContainer}>
              <Text style={styles.durationText}>{video.duration}</Text>
            </View>
          </View>

          <View style={styles.videoInfoRow}>
            <View style={styles.videoInfo}>
              <Text style={styles.title} numberOfLines={2}>{video.title}</Text>
              <Text style={styles.channel}>{video.channel}</Text>
          </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={16} color="white" />
            </TouchableOpacity>
          </View>

        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 15,
    justifyContent: "center",
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollContainer: {
    paddingTop: 0,
    backgroundColor: "#000",
  },
  videoCard: {
    width: 140,
    marginRight: 15,
  },
  thumbnailContainer: {
    position: "relative",
  },
  thumbnail: {
    width: "100%",
    height: 80,
    borderRadius: 8,
  },
  durationContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "rgba(41, 41, 41, 0.5)",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  durationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  videoInfoRow: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
  },
  videoInfo: {
    flex: 1,
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
  viewAllText: {
    color: "#3EA6FF",
    fontSize: 14,
  },
});
