import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    backgroundColor: 'lightgray', 
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', 
  },

  incompleteCheckbox: {
    backgroundColor: 'white',
  },
  taskText: {
    flex: 1,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
  },
});
