import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Airbnb - Jacó' },
  { id: '2', name: 'Casa Yorba - Jacó' },
  { id: '3', name: 'Hotel perico Azul - Jacó' },
  { id: '4', name: 'The Family Nest - Jacó' },
  { id: '5', name: 'The Sandhaus Original - Jacó' },
];

export default function JLodgingScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                disabled={true}
                style={{ padding: 12, borderBottomWidth: 1 }}
                onPress={() => router.push(`/j_lodging?id=${item.id}`)}
            >
                <Text>{item.name}</Text>
            </Pressable>
            )}
        />
        </View>
    );
}