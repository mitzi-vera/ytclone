import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const PlaylistPage = () => {
  const playlistData = [
    {
      id: "1",
      title: "Liked Video",
      thumbnail: require("../assets/react_native.png"),
      videoCount: 4,
    },
    {
      id: "2",
      title: "Watch later",
      thumbnail: require("../assets/javascript_tips.png"),
      videoCount: 15,
    },
    {
      id: "3",
      title: "Liked videos",
      thumbnail: require("../assets/react_navigation.png"),
      videoCount: 20,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.playlistBox}>
        <View style={styles.headerRow}>
          <Text style={styles.header}>Playlists</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          {playlistData.map((item) => (
            <TouchableOpacity key={item.id} style={styles.playlistItem}>
              <Image source={item.thumbnail} style={styles.playlistThumbnail} />
              <View style={styles.rowContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.playlistTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.playlistSubText}>
                    Private • {item.videoCount} videos
                  </Text>
                </View>
                <Ionicons
                  name="ellipsis-vertical"
                  size={16}
                  color="white"
                  style={styles.ellipsisIcon}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
    paddingHorizontal: 5,
    justifyContent: "center",
    marginTop: 0,
  },
  playlistBox: {
    backgroundColor: "#101010",
    padding: 10,
    borderRadius: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  header: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllText: {
    color: "#3EA6FF",
    fontSize: 14,
  },
  scrollView: {
    flexDirection: "row",
  },
  playlistItem: {
    width: 140,
    marginRight: 15,
  },
  playlistThumbnail: {
    width: "100%",
    height: 80,
    borderRadius: 8,
  },
  playlistTitle: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  playlistSubText: {
    color: "gray",
    fontSize: 12,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  ellipsisIcon: {
    marginRight: 8,
  },

  textContainer: {
    flex: 1,
  },
});

export default PlaylistPage;
