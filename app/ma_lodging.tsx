import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Airbnb - Manuel Antonio' },
  { id: '2', name: 'Mountain Top Park Hotel - Manuel Antonio' },
  { id: '3', name: 'Boutique Hotel Las Cascadas - Manuel Antonio' },
  { id: '4', name: 'Ecotica Boutique Hotel - Manuel Antonio' },
];

export default function MALodgingScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                disabled={true}
                style={{ padding: 12, borderBottomWidth: 1 }}
                onPress={() => router.push(`/ma_lodging?id=${item.id}`)}
            >
                <Text>{item.name}</Text>
            </Pressable>
            )}
        />
        </View>
    );
}