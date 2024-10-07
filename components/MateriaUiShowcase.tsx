import { View, Text, StyleSheet } from "react-native";
import { Button } from "@react-native-material/core";
import {useTypedStoreActions, useTypedStoreState} from '../store/hooks';

export const MaterialUiShowcase = () => {
  const {count} = useTypedStoreState((state) => state.mainModel);
  const {setCount} = useTypedStoreActions((actions) => actions.mainModel);
    

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <View>
            <Text style={styles.normalText}>Count: {count}</Text>
            <Button style={styles.normalButton} title="Increment Count" onPress={handleIncrement} />
            <Button style={styles.normalButton} title="Decrement Count" onPress={handleDecrement} />
        </View>
    )
}

const styles = StyleSheet.create({
    normalText: {
        fontSize: 24,
        marginBottom: 6 
    },
    normalButton: {
        marginBottom: 6
    }
})