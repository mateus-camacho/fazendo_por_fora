import { Label } from "@react-navigation/elements";
import { Pressable, Text, View, StyleSheet } from "react-native";

type Props = {
    label: string;
    tipo: string;
}

export default function Button({ label, tipo }: Props) {
    let buttonStyle, textStyle;
  
    switch (tipo) {
      case 'login':
        buttonStyle = { backgroundColor: '#000' };
        textStyle = { color: '#fff' };
        break;
      case 'registro':
        buttonStyle = { backgroundColor: '#fff' };
        textStyle = { color: '#000' };
        break;
      case 'google':
        buttonStyle = { 
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#ccc',
        };
        textStyle = { color: '#000' };
        break;
      default:
        buttonStyle = { backgroundColor: '#fff' };
        textStyle = { color: '#000' };
    }
  
    return (
      <Pressable 
        style={[styles.button, buttonStyle]}
        onPress={() => alert(`${label} pressionado`)}
      >
        <Text style={[styles.buttonLabel, textStyle]}>{label}</Text>
      </Pressable>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      width: '100%',
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 8,
    },
    buttonLabel: {
      fontSize: 16,
      fontWeight: '600',
    },
  });