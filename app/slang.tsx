import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'Pura vida - Life is good, thanks, you\'re welcome, hello, goodbye, everything\'s fine, etc.' },
  { id: '2', name: 'Me regala - May I please have' },
  { id: '3', name: 'Buenas - Good morning/afternoon/evening (common, everyday greeting)' },
  { id: '4', name: 'Mae - Dude, bro' },
  { id: '5', name: 'Tico/Tica - Costa Rican man/woman' },
  { id: '6', name: 'Gringo/Gringa - White man/woman' },
  { id: '7', name: 'Con gusto - You\'re welcome, my pleasure' },
];

export default function SlangScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                disabled={true}
                style={{ padding: 12, borderBottomWidth: 1 }}
                onPress={() => router.push(`/slang?id=${item.id}`)}
            >
                <Text>{item.name}</Text>
            </Pressable>
            )}
        />
        </View>
    );
}

export const screenOptions = {
  title: 'Slang',      // Top title
  headerBackTitle: 'Back',   // Text on the back button
};