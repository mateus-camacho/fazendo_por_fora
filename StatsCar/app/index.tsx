import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/button";



export default function Index() {
  return (

    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>STATSCAR</Text>
        <Text style={styles.subtitle}>Bem Vindo!</Text>
      </View>

      <View style={styles.footerContainer}>
        <Button tipo='login' label='Login' />
        <Button tipo='registro' label='Registrar' />
        
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Ou entrar com</Text>
          <View style={styles.dividerLine} />
        </View>

        <Button tipo='google' label='Google' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center', // Centraliza verticalmente
    padding: 20,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
  },
  footerContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end', // Alinha os botões na base
    paddingBottom: 40,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    fontSize: 12,
    color: '#ccc',
    marginHorizontal: 10,
  },
});