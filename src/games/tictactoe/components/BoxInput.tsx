import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import RenderIcons from './RenderIcons';

interface BoxInputProps {
    player: number | undefined; // Recibimos el valor de la celda (0, 1, 2)
    row: number;
    col: number;
    onPress: () => void;
}

const BoxInput: React.FC<BoxInputProps> = ({ player = undefined, row, col, onPress }) => {
    return (
        // TouchableOpacity permite que el card sea interactivo (detecta toques del usuario)
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <RenderIcons player={player} /> {/* Pasamos el valor de la celda */}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        width: 80,
        height: 80,
        padding: 15, // Espaciado interno del card
        marginVertical: 10, // Separación entre cards
        backgroundColor: '#ffffff', // Fondo blanco para contraste
        borderRadius: 10, // Bordes redondeados para estética
        elevation: 3, // Sombra en Android para darle profundidad
    },
});

export default BoxInput;