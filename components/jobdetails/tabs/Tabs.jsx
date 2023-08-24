import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";
const TabButton = ({ Name, activeTabs, onHandleSearchType }) => (
  <TouchableOpacity
    style={styles.btn(Name, activeTabs)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(Name, activeTabs)}>{Name}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activeTabs, setActiveTabs }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            Name={item}
            activeTabs={activeTabs}
            onHandleSearchType={() => {
              setActiveTabs(item);
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
