import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ResourcesScreen() {
  const handleContacts = () => {
    router.push('/contacts');
  };
  const handleSlang = () => {
    router.push('/slang');
  };
  const handlePacking = () => {
    router.push('/packing');
  };
  const handleService = () => {
    router.push('/service');
  };
  const handleGuidebook = () => {
    router.push('/guidebook');
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

        <Pressable
          style={styles.boxButton}
          onPress={handleSlang}>
            <Text style={styles.buttonText}>Tico Slang</Text>
        </Pressable>

        <Pressable
          style={styles.boxButton}
          onPress={handlePacking}>
            <Text style={styles.buttonText}>Packing List</Text>
        </Pressable>

        <Pressable
          style={styles.boxButton}
          onPress={handleService}>
            <Text style={styles.buttonText}>Service Opportunities</Text>
        </Pressable>

        <Pressable
          style={styles.boxButton}
          onPress={handleGuidebook}>
            <Text style={styles.buttonText}>Guidebook</Text>
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
    backgroundColor: '#8FD9FB',
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%'
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
