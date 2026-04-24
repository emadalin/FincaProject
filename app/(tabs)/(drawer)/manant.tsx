import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function ManAntScreen() {

  const handleRestaurant = () => {
    router.push('/ma_restaurant');
  };
  const handleCafe = () => {
    router.push('/ma_cafe');
  };
  const handleDayTrips = () => {
    router.push('/ma_daytrips');
  };
  const handleLodging = () => {
    router.push('/ma_lodging');
  };
  const handleTransportation = () => {
    router.push('/ma_transportation');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/ManAntPhoto.jpeg')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Recommendations</ThemedText>
      </ThemedView>

      <View style={styles.container}>
        <Pressable
          style={styles.boxButton}
          onPress={handleRestaurant}>
            <Text style={styles.buttonText}>Restaurants and Sodas</Text>
        </Pressable>

        <Pressable
          style={styles.boxButton}
          onPress={handleCafe}>
            <Text style={styles.buttonText}>Cafés and Study Spots</Text>
        </Pressable>

        <Pressable
          style={styles.boxButton}
          onPress={handleDayTrips}>
            <Text style={styles.buttonText}>Day Trips</Text>
        </Pressable>

        <Pressable
          style={styles.boxButton}
          onPress={handleLodging}>
            <Text style={styles.buttonText}>Places to Stay</Text>
        </Pressable>

        <Pressable
          style={styles.boxButton}
          onPress={handleTransportation}>
            <Text style={styles.buttonText}>Transportation</Text>
        </Pressable>

      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 4,
    justifyContent: "center"
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    width: '100%',
    height: 250,
    position: 'absolute',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    justifyContent: "center",
    gap: 30,
    width: '100%'
  },
  boxButton: {
    backgroundColor: '#FFCC99',
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%'
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
});