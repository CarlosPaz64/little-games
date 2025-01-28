import React from "react";
import { StyleSheet } from "react-native";
import DifficultyModal from "./DifficultySelectorModal";
import { difficulties } from "../data/DifficultyData";

/**
 * Props para el componente DifficultySelector.
 * @param visible - Indica si el modal debe estar visible.
 * @param onClose - Callback para cerrar el modal.
 * @param onSelectDifficulty - Callback al seleccionar un nivel de dificultad.
 */
interface DifficultySelectorProps {
  visible: boolean; // Control de visibilidad del modal
  onClose: () => void; // Callback para cerrar el modal
  onSelectDifficulty: (difficulty: string) => void; // Callback al seleccionar una dificultad
}

/**
 * Componente que renderiza únicamente el modal de selección de dificultad.
 */
const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  visible,
  onClose,
  onSelectDifficulty,
}) => {
  return (
    <DifficultyModal
      visible={visible}
      onClose={onClose}
      difficulties={difficulties}
      onSelect={onSelectDifficulty}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default DifficultySelector;