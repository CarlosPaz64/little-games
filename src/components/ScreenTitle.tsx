import React from "react";
import { StyleSheet, Text } from "react-native";

/**
 * Props para el componente ScreenTitle.
 * @param title - El texto del título que se mostrará.
 */
interface ScreenTitleProps {
  title: string;
}

/**
 * Componente para mostrar el título de una pantalla.
 * Es reutilizable y puramente presentacional.
 */
const ScreenTitle: React.FC<ScreenTitleProps> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24, // Tamaño grande para destacar el título
    fontWeight: "bold", // Negrita para énfasis
    textAlign: "center", // Centrado
    marginBottom: 20, // Separación del contenido siguiente
  },
});

export default ScreenTitle;