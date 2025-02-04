import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import PlaylistPage from "./PlaylistPage";
import HistoryPage from "./HistoryPage";
import OptionsTab from "./OptionsTab";
import OptionsBottom from "./OptionsBottom";
import { ScrollView } from "react-native";

{
  /*NavItem Component = reusable and will be used for the top and bottom navbars*/
}
const NavItem = ({ iconSource, label, style, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.navContainer]}>
      <Image style={[styles.navIcons, style]} source={iconSource} />
      {label && <Text style={styles.navLabels}>{label}</Text>}
    </View>
  </TouchableOpacity>
);

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      {/* Top NavBar starts Here */}
      <View style={styles.topNavBar}>
        {[
          { icon: require("../assets/cast.png") },
          { icon: require("../assets/notifs.png") },
          { icon: require("../assets/search.png") },
          { icon: require("../assets/settings.png") },
        ].map((item, index) => (
          <NavItem
            key={index}
            iconSource={item.icon}
            style={styles.iconSpacing}
          />
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Tab */}
        <View style={styles.profileTab}>
          <Image
            source={require("../assets/profile_picture.png")}
            style={styles.bigProfilePic}
          />
          <View>
            <Text
              style={[
                styles.darkModeText,
                { fontSize: 26, fontWeight: "bold" },
              ]}
            >
              George Cutiepie
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.darkModeText}>@cprg303A_ytClone</Text>
              <Text style={styles.darkModeText}> • </Text>
              <TouchableOpacity>
                <Text style={styles.darkModeText}> View channel ›</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Options Tab */}
        <View style={[{ height: 70 }]}>
          <OptionsTab />
        </View>

        {/* History Tab */}
        <View style={[{ flex: 1 }]}>
          <View style={[{ height: 200 }]}>
            <HistoryPage />
          </View>

          {/* Playlist Tab */}
          <View style={[{ height: 200, paddingVertical: 0 }]}>
            <Text style={{ color: "white", marginBottom: 0 }}></Text>
            <PlaylistPage />
          </View>

          <View>
            <OptionsBottom />
          </View>
        </View>
      </ScrollView>

      {/* Bottom NavBar starts Here */}
      <View style={{ ...styles.navBar, ...styles.bottomNavBar }}>
        {[
          { icon: require("../assets/home.png"), label: "Home" },
          { icon: require("../assets/shorts.png"), label: "Shorts" },
          {
            icon: require("../assets/plus.png"),
            iconStyle: { width: 45, height: 45 },
          },
          { icon: require("../assets/subs.png"), label: "Subscriptions" },
          {
            icon: require("../assets/profile_picture.png"),
            label: "You",
            iconStyle: styles.profilePic,
          },
        ].map((item, index) => (
          <NavItem
            key={index}
            iconSource={item.icon}
            label={item.label}
            style={item.iconStyle}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101010",
    width: "100%",
    flex: 1,
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: "#e1dddc",
  },
  topNavBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: "5%",
    marginTop: 30,
  },
  navLabels: {
    color: "#ffffff",
    fontSize: 12,
    textAlign: "center",
  },
  navIcons: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  bottomNavBar: {
    height: "8%",
  },
  profilePic: {
    height: 35,
    width: 35,
    borderColor: "#FFFFFF",
    borderRadius: 50,
    borderWidth: 2,
  },
  iconSpacing: {
    marginHorizontal: 10,
  },
  // 20250202 BT

  //sampleTab only for visual purposes. remove and add your own style.
  sampleTab: {
    borderColor: "yellow",
    borderWidth: 2,
    width: "100%",
  },
  profileTab: {
    flexDirection: "row",
    width: "100%",
    height: 120,
    alignItems: "center",
  },
  bigProfilePic: {
    height: 80,
    width: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "grey",
    margin: 20,
  },
  darkModeText: {
    color: "#FFFF",
    fontSize: 14,
  },
  scrollContainer: {
    paddingBottom: 80,
  },
});

export default ProfilePage;
