import { Image } from 'expo-image';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  function sayHello() {
    const greetingName = name.trim() || 'friend';
    Alert.alert('Jackpot!', `Hello, ${greetingName}! Have a Shawarma!`);
  }

  function incrementCount() {
    setCount((currentCount) => currentCount + 1);
  }

  function decrementCount() {
    setCount((currentCount) => Math.max(0, currentCount - 1));
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.card}>
        <Image
          accessibilityLabel="Vergil holding food"
          contentFit="cover"
          source={require('@/assets/images/vergil.jpg')}
          style={styles.logo}
        />

        <Text style={styles.title}>What's up, World!</Text>
        <Text style={styles.subtitle}>Go ahead and type your name below!.</Text>

        <TextInput
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#7a8797"
          style={styles.input}
          value={name}
        />

        <View style={styles.buttonWrapper}>
          <Button color="#3b82f6" onPress={sayHello} title="Say Hello" />
        </View>

        <View style={styles.counterSection}>
          <Text style={styles.counterTitle}>Counter</Text>
          <Text style={styles.counterValue}>{count}</Text>

          <View style={styles.counterButtons}>
            <View style={styles.counterButton}>
              <Button color="#60a5fa" onPress={incrementCount} title="Increment" />
            </View>
            <View style={styles.counterButton}>
              <Button color="#1e40af" onPress={decrementCount} title="Decrement" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#3b82f6',
    borderRadius: 16,
    padding: 28,
    shadowColor: '#111827',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 16,
    marginBottom: 24,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#e0e7ff',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderColor: '#93c5fd',
    borderRadius: 10,
    borderWidth: 1,
    color: '#111827',
    fontSize: 16,
    marginBottom: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonWrapper: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  counterSection: {
    width: '100%',
    alignItems: 'center',
    borderTopColor: '#60a5fa',
    borderTopWidth: 1,
    marginTop: 24,
    paddingTop: 24,
  },
  counterTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  counterValue: {
    color: '#ffffff',
    fontSize: 44,
    fontWeight: '800',
    marginBottom: 16,
  },
  counterButtons: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
  },
  counterButton: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
