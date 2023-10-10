

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff', 
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black', 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#08090E',
    color: '#ffffff', 
    placeholderTextColor: 'white',
  },
  button: {
    backgroundColor: '#4236C5',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotButtonText: {
    color: 'black',
    paddingTop: 8,
    paddingBottom: 16,
  },
  registerButtonText:{
    color: 'black',
    padding: 16,
  }

});
