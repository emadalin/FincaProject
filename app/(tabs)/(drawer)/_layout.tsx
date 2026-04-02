import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="index" // This matches the file name in /app
                    options={{
                        drawerLabel: 'Home', // Name in drawer
                        title: 'Home',   // Header title
                        drawerActiveTintColor: 'green',
                    }}
                />
                <Drawer.Screen
                    name="manant" // This matches the file name in /app
                    options={{
                        drawerLabel: 'Manuel Antonio', // Name in drawer
                        title: 'Manuel Antonio',   // Header title
                        drawerActiveTintColor: 'orange'
                    }}
                />
                <Drawer.Screen
                    name="jaco" // This matches the file name in /app
                    options={{
                        drawerLabel: 'Jaco', // Name in drawer
                        title: 'Jaco',   // Header title
                        drawerActiveTintColor: 'purple'
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
