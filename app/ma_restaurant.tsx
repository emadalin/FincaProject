import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Bonding Restaurant - Quepos' },
  { id: '2', name: 'Restaurante La Costa - Quepos' },
  { id: '3', name: 'Pastelería y Cafetería La Panera - Quepos' },
  { id: '4', name: 'Coffee Stop - Quepos' },
  { id: '5', name: 'El Wagon - Manuel Antonio' },
];

export default function MARestaurantScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                disabled={true}
                style={{ padding: 12, borderBottomWidth: 1 }}
                onPress={() => router.push(`/ma_restaurant?id=${item.id}`)}
            >
                <Text>{item.name}</Text>
            </Pressable>
            )}
        />
        </View>
    );
}