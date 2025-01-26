import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

/**
 * Props para el componente DifficultyModal.
 * @param visible - Indica si el modal está visible.
 * @param onClose - Callback para cerrar el modal.
 * @param difficulties - Lista de niveles de dificultad.
 * @param onSelect - Callback al seleccionar una dificultad.
 */
interface DifficultyModalProps {
  visible: boolean;
  onClose: () => void;
  difficulties: string[];
  onSelect: (difficulty: string) => void;
}

/**
 * Componente que renderiza un modal con las opciones de dificultad.
 */
const DifficultyModal: React.FC<DifficultyModalProps> = ({
  visible,
  onClose,
  difficulties,
  onSelect,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Selecciona la Dificultad</Text>
          <FlatList
            data={difficulties}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => onSelect(item)}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  optionButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#ddd",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#f00",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default DifficultyModal;