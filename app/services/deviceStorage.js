import { AsyncStorage } from 'react-native';

const deviceStorage = {
    
    async saveItem(key, value) {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
      }
    },
    async getItem(name) {
      try {
        const value = await AsyncStorage.getItem(name);
        if (value != null) {
          return value;
        }
      } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
      }
    },
    async deleteItem(name) {
      try {
        await AsyncStorage.removeItem(name);
      } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
      }
    }
    
  };
  

export default deviceStorage;