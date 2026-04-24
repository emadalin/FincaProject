import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack>
        <Stack.Screen 
          name="(tabs)"
          options= {{ headerShown: false }}
        />
        <Stack.Screen 
          name="restaurant"
          options= {{ 
            title: 'Restaurants',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="cafe"
          options= {{ 
            title: 'Cafés',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="daytrips"
          options= {{ 
            title: 'Day Trips',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="lodging"
          options= {{ 
            title: 'Places to Stay',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="transportation"
          options= {{ 
            title: 'Transportation',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="contacts"
          options= {{ 
            title: 'Contacts',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="slang"
          options= {{ 
            title: 'Slang',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="packing"
          options= {{ 
            title: 'Packing',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="service"
          options= {{ 
            title: 'Service Opportunities',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="guidebook"
          options= {{ 
            title: 'Guidebook',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="misc"
          options= {{ 
            title: 'Miscellaneous',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="ma_restaurant"
          options= {{ 
            title: 'Restaurants',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="ma_cafe"
          options= {{ 
            title: 'Cafés',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="ma_daytrips"
          options= {{ 
            title: 'Day Trips',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="ma_lodging"
          options= {{ 
            title: 'Places to Stay',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="ma_transportation"
          options= {{ 
            title: 'Transportation',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="j_restaurant"
          options= {{ 
            title: 'Restaurants',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="j_cafe"
          options= {{ 
            title: 'Cafés',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="j_daytrips"
          options= {{ 
            title: 'Day Trips',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="j_lodging"
          options= {{ 
            title: 'Places to Stay',
            headerBackTitle: 'Back' ,
          }}
        />
        <Stack.Screen 
          name="j_transportation"
          options= {{ 
            title: 'Transportation',
            headerBackTitle: 'Back' ,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}