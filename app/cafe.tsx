import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Tulsi Café y Plantas - Ciudad Colón' },
  { id: '2', name: 'Casa Amara - Ciudad Colón' },
  { id: '3', name: 'Café Colon - Ciudad Colón' },
  { id: '4', name: 'Tulipan Repostería - Ciudad Colón' },
];

export default function CafeScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                disabled={true}
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