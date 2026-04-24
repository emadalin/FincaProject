import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Nauyaca Waterfall Nature Park - Pérez Zeledón' },
  { id: '2', name: 'Manuel Antonio National Park - Manuel Antonio' },
  { id: '3', name: 'Mangrove Kayak Tour - Manuel Antonio' },
  { id: '4', name: 'Rainmaker Park Canopy Bridges - Parrita' },
  { id: '5', name: 'Catamaran Tour - Manuel Antonio' },
  { id: '6', name: 'Chocolate Tour - Manuel Antonio' },
];

export default function MADayTripsScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                disabled={true}
                style={{ padding: 12, borderBottomWidth: 1 }}
                onPress={() => router.push(`/ma_daytrips?id=${item.id}`)}
            >
                <Text>{item.name}</Text>
            </Pressable>
            )}
        />
        </View>
    );
}