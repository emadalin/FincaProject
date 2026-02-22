import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Tulsi Café - Ciudad Colon' },
  { id: '2', name: 'Casa Amara - Ciudad Colon' },
  { id: '3', name: 'Café Colon - Ciudad Colon' },
];

export default function CafeScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                style={{ padding: 12, borderBottomWidth: 1 }}
                onPress={() => router.push(`/cafe?id=${item.id}`)}
            >
                <Text>{item.name}</Text>
            </Pressable>
            )}
        />
        </View>
    );
}