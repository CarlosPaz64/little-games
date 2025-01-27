import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconsProps {
    player?: number; // Hacer que player sea opcional
}

const RenderIcons: React.FC<IconsProps> = ({ player }) => {
    if (player === 0) {
        return null; // No renderiza nada si player es undefined
    }

    return (
        <Ionicons
            name={player === 1 ? 'close' : 'ellipse-outline'}
            size={50}
            color={player === 1 ? 'red' : 'green'}
        />
    );
};

export default RenderIcons;
