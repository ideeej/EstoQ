import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Id = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Product {id}</Text>
    </View>
  );
};

export default Id;
