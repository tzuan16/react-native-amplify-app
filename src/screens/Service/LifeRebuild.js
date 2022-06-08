import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";
import AppCard from "../../components/AppCard";

const list = [
  {
    title: "生活重建與家庭支持服務",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis maximus mauris a commodo. Vestibulum orci lorem, placerat eget lacinia ac, hendrerit et turpis. Suspendisse consectetur lorem a hendrerit rhoncus. Duis euismod fringilla dui, eu sodales metus cursus id. Sed eleifend nisl quis tristique porttitor. Praesent vel blandit felis, a iaculis diam. Fusce ullamcorper quam facilisis libero elementum, vel auctor magna mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis tristique dui. Quisque vel consequat lacus. Donec eu sem eget lacus pellentesque eleifend ut eu turpis. Sed lobortis, felis ac fringilla lobortis, massa felis lacinia massa, facilisis faucibus dolor urna id ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    title: "聽障者就業推廣服務",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis maximus mauris a commodo. Vestibulum orci lorem, placerat eget lacinia ac, hendrerit et turpis. Suspendisse consectetur lorem a hendrerit rhoncus. Duis euismod fringilla dui, eu sodales metus cursus id. Sed eleifend nisl quis tristique porttitor. Praesent vel blandit felis, a iaculis diam. Fusce ullamcorper quam facilisis libero elementum, vel auctor magna mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis tristique dui. Quisque vel consequat lacus. Donec eu sem eget lacus pellentesque eleifend ut eu turpis. Sed lobortis, felis ac fringilla lobortis, massa felis lacinia massa, facilisis faucibus dolor urna id ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    title: "聲聞聽語中心",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis maximus mauris a commodo. Vestibulum orci lorem, placerat eget lacinia ac, hendrerit et turpis. Suspendisse consectetur lorem a hendrerit rhoncus. Duis euismod fringilla dui, eu sodales metus cursus id. Sed eleifend nisl quis tristique porttitor. Praesent vel blandit felis, a iaculis diam. Fusce ullamcorper quam facilisis libero elementum, vel auctor magna mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis tristique dui. Quisque vel consequat lacus. Donec eu sem eget lacus pellentesque eleifend ut eu turpis. Sed lobortis, felis ac fringilla lobortis, massa felis lacinia massa, facilisis faucibus dolor urna id ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

export default LifeRebuild = () => {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Text>H</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    // alignItems: "center",
    // justifyContent: "space-around",
  },
});
