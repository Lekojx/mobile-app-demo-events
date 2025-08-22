import { View, Text, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EventsSecondScreen from './EventsSecondScreen';

const EventsScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Events!</Text>
    {/* <Pressable
      onPress={() => navigation.navigate("EventsSecond")}
      style={{
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5
      }}>
      <Text style={{ color: "white" }}>Go to Second Screen!</Text>
    </Pressable> */}
    <Pressable
      onPress={() => navigation.navigate("EventsSecond")}
    >
      <View
        style={{
          borderWidth: 1,
          padding: 20,
          borderRadius:5
        }}
      >
        <Text style={{
          fontSize: 28,
          textDecorationLine: "underline"
        }}>National Day Parade</Text>
        <Text>2025-08-09</Text>
      </View>
    </Pressable>
  </View>
);

const Stack = createStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsScreen} />
      <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
    </Stack.Navigator>
  )
}

export default EventsStack;