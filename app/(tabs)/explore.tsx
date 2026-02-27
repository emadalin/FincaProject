import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ResourcesScreen() {
  const handleContacts = () => {
    
  };
  const handleSlang = () => {
    
  };
  const handlePacking = () => {
    
  };
  const handleVolunteer = () => {
    
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/CrossPhoto.jpg')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Resources</ThemedText>
      </ThemedView>

      <View style={styles.container}>
        <Pressable
          style={styles.boxButton}
          onPress={handleContacts}>
            <Text style={styles.buttonText}>Contacts</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.boxButton}
          onPress={handleSlang}>
            <Text style={styles.buttonText}>Popular Slang and Expressions</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.boxButton}
          onPress={handlePacking}>
            <Text style={styles.buttonText}>Packing List</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.boxButton}
          onPress={handleVolunteer}>
            <Text style={styles.buttonText}>Volunteer Opportunities</Text>
        </Pressable>
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
    marginVertical: 8,
  },
  boxButton: {
    backgroundColor: '#8FD9FB',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
});
