import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Green Room - Jacó' },
  { id: '2', name: 'Los Sueños Marina - Jacó' },
  { id: '3', name: 'Samudio\'s - Jacó' },
  { id: '4', name: 'Graffiti Restro - Jacó' },
  
];

export default function JRestaurantScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                disabled={true}
                style={{ padding: 12, borderBottomWidth: 1 }}
                onPress={() => router.push(`/j_restaurant?id=${item.id}`)}
            >
                <Text>{item.name}</Text>
            </Pressable>
            )}
        />
        </View>
    );
}