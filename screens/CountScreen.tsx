import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const CountScreen = () => {
  const [count, setCount] = useState(10);
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <Pressable
        onPress={() => {
          setCount(count + 1);
          setPressed(true);
        }}
        onLongPress={() => {
          setCount(0);
          setPressed(false);
        }}
        onPressOut={() => setPressed(false)}
        style={[styles.button, pressed && styles.buttonPress]}>
        <Text style={{color: 'white'}}>Incrementar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'red',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#5856D6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    color: 'white',
  },
  buttonPress: {
    backgroundColor: '#4746AB',
  },
});

export default CountScreen;