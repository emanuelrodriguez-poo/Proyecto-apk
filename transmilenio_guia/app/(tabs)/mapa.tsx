import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

export default function MapScreen() {
  return (
    <View style={styles.container}>

      {/* MAPA SIMPLE PARA WEB */}
      {Platform.OS === 'web' ? (
        <iframe
          src="https://www.google.com/maps?q=4.7110,-74.0721&z=15&output=embed"
          style={{ flex: 1, border: 0, width: '100%', height: '100%' }}
        />
      ) : (
        <View style={styles.mobileMap}>
          <Text>Mapa disponible en app móvil (Expo Go)</Text>
        </View>
      )}

      {/* BOTÓN */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Ver ruta')}
      >
        <Text style={styles.buttonText}>Ver ruta</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mobileMap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});