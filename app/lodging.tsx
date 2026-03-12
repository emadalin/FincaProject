import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Hacienda Su Majestad - Ciudad Colon' },
];

export default function LodgingScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                style={{ padding: 12, borderBottomWidth: 1 }}
                onPress={() => router.push(`/lodging?id=${item.id}`)}
            >
                <Text>{item.name}</Text>
            </Pressable>
            )}
        />
        </View>
    );
}