import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

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
      {/*Please add your code here*/}

      {/*NAVBAR CODE STARTS HERE*/}
      {/* Top NavBar starts Here */}
      <View style={styles.container}>
        {/* Top NavBar */}
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: "#e1dddc",
  },
  topNavBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: "10%",
    position: "absolute",
    top: 0,
    marginTop: 10,
    right: 0,
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
});

export default ProfilePage;
