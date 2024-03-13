import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Title from "../../components/Title";

export default function Category() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title="Category" />
      <TouchableOpacity
        style={styles.button}
        onPress={navigation.navigate("Home")}
      >
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
