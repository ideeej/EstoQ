import { View, Text } from 'react-native'
import { Tabs } from "expo-router"

const _Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen 
            name="index"
            options={{
                title:"Index",
                headerShown: false
            }}/>
        <Tabs.Screen 
            name="home"
            options={{
                title:"Home",
                headerShown: false
            }}/>
    </Tabs>
  )
}

export default _Layout