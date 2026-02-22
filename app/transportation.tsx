import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Jimmy and Rigo' },
  { id: '2', name: 'Uber' },
  { id: '3', name: 'Taxi' },
  { id: '4', name: 'Interbus' },
  { id: '5', name: 'City bus' },
];

export default function TransportationScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                style={{ padding: 12, borderBottomWidth: 1 }}
                onPress={() => router.push(`/transportation?id=${item.id}`)}
            >
                <Text>{item.name}</Text>
            </Pressable>
            )}
        />
        </View>
    );
}