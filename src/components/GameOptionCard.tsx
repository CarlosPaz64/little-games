// Card para las opciones de juego
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

/**
 * Props que recibe el componente GameOptionCard
 * @param title - Título principal del "card" (por ejemplo, nombre del juego).
 * @param subtitle - Subtítulo opcional para detalles adicionales (por ejemplo, descripción del juego).
 * @param onPress - Función que se ejecuta al presionar el card.
 */
interface GameOptionCardProps {
  title: string;
  subtitle?: string; // Es opcional, ya que no todos los cards podrían tener subtítulo.
  onPress: () => void; // Función que se ejecutará al interactuar con el componente.
}

/**
 * Componente presentacional para mostrar un "card".
 * - Totalmente desacoplado de la lógica del juego.
 * - Diseñado para ser reutilizable en otros contextos (no solo para juegos).
 */
const GameOptionCard: React.FC<GameOptionCardProps> = ({ title, subtitle, onPress }) => {
  return (
    // TouchableOpacity permite que el card sea interactivo (detecta toques del usuario).
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text> {/* Muestra el título principal */}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>} {/* Muestra el subtítulo si existe */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15, // Espaciado interno del card
    marginVertical: 10, // Separación entre cards
    backgroundColor: "#ffffff", // Fondo blanco para contraste
    borderRadius: 10, // Bordes redondeados para estética
    elevation: 3, // Sombra en Android para darle profundidad
  },
  title: {
    fontSize: 18, // Tamaño grande para destacar el título
    fontWeight: "bold", // Negrita para énfasis
  },
  subtitle: {
    fontSize: 14, // Tamaño menor para el subtítulo
    color: "#555", // Color gris para diferenciar del título
  },
});

export default GameOptionCard; // Exportamos el componente base para ser usado en otros lugares.