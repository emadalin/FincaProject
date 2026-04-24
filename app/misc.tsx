import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'The gray cat\'s name is Kevinita! She likes raw chicken, tuna, and to be pet. She will follow you if you meow at her. If she has babies, they must be named Reagan, Isabelle, Ella, Grace, and Blake.' },
  { id: '2', name: 'Talk to the ladies at Casa Amara; they\'re the best!' },
  { id: '3', name: 'Comunidad Celebración in Santa Ana is a great church! Everyone is super kind and welcoming.' },
  { id: '4', name: 'If you want to bond with your cohort, we highly recommend watching movies together in the Lackey Lounge.' },
  { id: '5', name: 'Leave a parting gift for future cohorts! We hope you enjoyed the guitar :)' },
  { id: '6', name: 'Email me (Ella Madalinski) with any additions or ideas for this app! emadalin@samford.edu' },
  
];

export default function MiscScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                disabled={true}
                style={{ padding: 12, borderBottomWidth: 1 }}
                onPress={() => router.push(`/misc?id=${item.id}`)}
            >
                <Text>{item.name}</Text>
            </Pressable>
            )}
        />
        </View>
    );
}