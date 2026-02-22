import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const handleRestaurant = () => {
    router.push('/restaurant');
  };
  const handleCafe = () => {
    router.push('/cafe');
  };
  const handleDayTrips = () => {
    router.push('/daytrips');
  };
  const handleOvernightTrips = () => {
    router.push('/overnighttrips');
  };
  const handleTransportation = () => {
    router.push('/transportation');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/OutsideFincaPhoto.jpg')}
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
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.boxButton}
          onPress={handleCafe}>
            <Text style={styles.buttonText}>Cafés and Study Spots</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.boxButton}
          onPress={handleDayTrips}>
            <Text style={styles.buttonText}>Day Trips</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.boxButton}
          onPress={handleOvernightTrips}>
            <Text style={styles.buttonText}>Overnight Trips</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
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
    backgroundColor: '#9CAF88',
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

      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Restaurants and Sodas</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">La Cabriola - Ciudad Colon</ThemedText>
          {'\n'}description of La Cabriola
          <ThemedText type="defaultSemiBold">{'\n'}Nuestra Tierra - San Jose</ThemedText>
          {'\n'}description of Nuestra Tierrra
          {' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Cafés and Study Spots</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Casa Amara - Ciudad Colon</ThemedText>
          {'\n'}description of Casa Amara
          <ThemedText type="defaultSemiBold">{'\n'}Tulsi Café - Ciudad Colon</ThemedText>
          {'\n'}description of Tulsi
          {' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Day Trips</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Baldi Hot Springs</ThemedText>
          {'\n'}description of Baldi
          {' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Overnight Trips</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Idea</ThemedText>
          {'\n'}description of Idea
          {' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Transportation</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Uber</ThemedText>
          {'\n'}description of Uber
          <ThemedText type="defaultSemiBold">{'\n'}Bus</ThemedText>
          {'\n'}description of Bus
          <ThemedText type="defaultSemiBold">{'\n'}Interbus</ThemedText>
          {'\n'}description of Interbus
          <ThemedText type="defaultSemiBold">{'\n'}Gata&friends</ThemedText>
          {'\n'}description of Gata
          {' '}
        </ThemedText>
      </ThemedView>
        <ThemedText></ThemedText>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Resources</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
