import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

const data = [
  { id: '1', name: 'La Cabriola - Ciudad Colon' },
  { id: '2', name: 'Che Pizza - Ciudad Colon' },
  { id: '3', name: 'La Ventanita del Mexicana - Ciudad Colon' },
  { id: '4', name: 'Antica Pizzeria Napoletana - Santa Ana' },
  { id: '5', name: 'Nacion Sushi - Santa Ana' },
  { id: '6', name: 'La Choza de Joel - Ciudad Colon' },
  { id: '7', name: 'Plaza de Comidas Containers - Ciudad Colon' },
];

export default function RestaurantScreen() {
    return (
        <View style={{ flex: 1, padding: 16 }}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Pressable
                style={{ padding: 12, borderBottomWidth: 1 }}
                onPress={() => router.push(`/restaurant?id=${item.id}`)}
            >
                <Text>{item.name}</Text>
            </Pressable>
            )}
        />
        </View>
    );
}