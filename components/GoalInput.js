import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const GoalInput = props => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.onVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your goal..."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={addGoalHandler}>
            <Text>Add Goal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={props.onCanel}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 24,
    padding: 16,
  },
  input: {
    padding: 12,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    color: '#333',
  },
  btn: {
    backgroundColor: '#5e0acc',
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    width: 100,
    marginHorizontal: 8,
  },
  btnContainer: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 10,
  },
});
