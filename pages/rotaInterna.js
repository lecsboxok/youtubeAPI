import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import YoutubePage from './youtubePage';
import VimeoPage from './vimeoPage';


const Tab = createBottomTabNavigator();

export default function RotaInterna() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: "#fff",
                tabBarStyle: {
                    position: 'absolute',
                    height: 60,
                    bottom: 30,
                    right: 30,
                    left: 30,
                    borderRadius: 5,
                    backgroundColor: "#e7e5e4",
                },

            }}>
            <Tab.Screen 
                name="Youtube"
                component={YoutubePage}
                options={{
                    tabBarBadge: 1,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Entypo name="youtube" size={24} color="black" />)
                        }
                        return (<Feather name="youtube" size={24} color="black" />)
                    }
                }}
            >
            </Tab.Screen>

            <Tab.Screen
                name="Vimeo"
                component={VimeoPage}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Entypo name="vimeo" size={24} color="black" />)
                        }
                        return (<Entypo name="vimeo" size={24} color="#b2b0be" />)
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    )
}