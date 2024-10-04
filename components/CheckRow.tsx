import { Ionicons } from "@expo/vector-icons"
import { View, Text } from "react-native"

interface IProps {
    iconId?: keyof typeof Ionicons.glyphMap;
    text?: string;
    color?: string;
}

export const CheckRow = ({iconId = "checkmark-circle", text = "item", color="gray"}: IProps) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap:5 }}>
          <Ionicons name={iconId} size={32} color={color} />
          <Text style={{fontSize: 20}}>{text}</Text>
        </View>
    )
}