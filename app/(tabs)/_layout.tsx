import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons"

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon({focused, color, size}) {
            return <FontAwesome name="home" color={color} size={size} />
          }
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          headerShown: false,
          tabBarIcon({focused, color, size}) {
            return <FontAwesome name="barcode" color={color} size={size} />
          }
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Produtos",
          headerShown: false,
          tabBarIcon({focused, color, size}) {
            return <FontAwesome name="tags" color={color} size={size} />
          }
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Config",
          headerShown: false,
          tabBarIcon({focused, color, size}) {
            return <FontAwesome name="gear" color={color} size={size} />
          }
        }}
      />
    </Tabs>
  );
};

export default _Layout;
