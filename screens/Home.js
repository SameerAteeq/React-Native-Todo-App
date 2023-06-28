import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenHeaderBtn} from '../components';
import GoalInput from '../components/GoalInput';
import GoalItem from '../components/GoalItem';

const Stack = createNativeStackNavigator();
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  const hideModal = () => {
    setShowModal(false);
  };

  const handlePress = text => {
    if (text === '') {
      return alert('Please fill the field');
    }
    const data = {
      id: Math.floor(Math.random() * 1000),
      text: text,
    };

    setGoals(prev => [...prev, data]);
    hideModal();
  };

  function deleteHandler(id) {
    setGoals(currGoal => currGoal.filter(goal => goal.id !== id));
  }
  console.log(goals);
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={() => setShowModal(true)}
      />
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your goal..."
          onChangeText={handleInput}
        />
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text>Add Goal</Text>
        </TouchableOpacity>
      </View> */}
      <GoalInput
        onAddGoal={handlePress}
        onVisible={showModal}
        onCanel={hideModal}
      />
      <View style={styles.goalContainer}>
        {goals?.length > 0 && (
          <Text style={{color: 'black', fontSize: 24, marginBottom: 10}}>
            List of Goals
          </Text>
        )}
        <FlatList
          data={goals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
  input: {
    padding: 12,
    width: '70%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    color: '#333',
  },
  btn: {
    backgroundColor: '#5e0acc',
    padding: 12,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
  },
  goalContainer: {
    flex: 1,
    marginTop: 20,
  },
  goalItem: {
    backgroundColor: '#5e0acc',
    marginBottom: 8,
    padding: 10,
    borderRadius: 8,
  },
  goalText: {
    fontSize: 16,
  },
});
