import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistStorage } from "easy-peasy";

// allow everything, idk why but you have to, otherwise it wont work
const persistStorage: PersistStorage = {
    async getItem(key) {
        const value = await AsyncStorage.getItem(key);
        if (value) return JSON.parse(value);
        else return undefined;
    },
    async setItem(key, data) {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    },
    async removeItem(key) {
        await AsyncStorage.removeItem(key);
    },
};

export default persistStorage;