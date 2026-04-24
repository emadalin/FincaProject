import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Roasted Edge Coffee - Jacó' },
  { id: '2', name: 'Café Bohío - Jacó' },
  { id: '3', name: 'Ambrosia Café - Jacó' },
  { id: '4', name: 'Jet Fuel Coffee - Jacó' },
];

export default function JCafeScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                disabled={true}
                style={{ padding: 12, borderBottomWidth: 1 }}
                onPress={() => router.push(`/j_cafe?id=${item.id}`)}
            >
                <Text>{item.name}</Text>
            </Pressable>
            )}
        />
        </View>
    );
}