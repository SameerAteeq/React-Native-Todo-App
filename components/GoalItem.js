import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#5e0acc',
    marginBottom: 8,
    borderRadius: 8,
  },
  pressedItem: {
    opacity: 0.6, //For IOS
  },
  goalText: {
    padding: 10,
    fontSize: 16,
  },
});
