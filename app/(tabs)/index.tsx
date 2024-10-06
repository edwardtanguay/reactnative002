import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import {useTypedStoreState} from '../../store/hooks';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CheckRow } from '@/components/CheckRow';
import { MaterialUiShowcase } from '@/components/MateriaUiShowcase';


export default function HomeScreen() {
  const {message} = useTypedStoreState((state) => state.mainModel);
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">React Native 002</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Text>{message}</Text>
      </ThemedView>
      <View>
        <Text style={styles.h3}>Custom Components</Text>
        <CheckRow text="Item 001" color="red"/>
        <CheckRow text="Item 002" color="blue"/>
        <CheckRow text="Item 003" color="green"/>
        <CheckRow text="Item 004" color="purple"/>
        <CheckRow text="Item 005" color="gray"/>
        <CheckRow text="Item 006" color="orange"/>
      </View>
      <View>
        <Text style={styles.h3}>Material UI</Text>
        <MaterialUiShowcase/>
      </View>
        <Text style={styles.h3}>Original Page</Text>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see TESTING7777 changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
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
    padding: 10,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  h3: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    backgroundColor: '#ddd',
    padding: 2,
    paddingLeft: 6,
    borderRadius: 5
  }
});
