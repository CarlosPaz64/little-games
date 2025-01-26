import React from "react";
import GameOptionCard from "./GameOptionCard"; // Importamos el componente base para la presentación

/**
 * Props que recibe el componente GameOption
 * @param name - Nombre del juego (por ejemplo, "Crucigramas").
 * @param description - Breve descripción del juego (opcional).
 * @param onSelect - Función a ejecutar cuando se selecciona el juego.
 */
interface GameOptionProps {
  name: string;
  description: string;
  onSelect: () => void;
}

/**
 * Componente que actúa como contenedor para manejar la lógica específica del juego.
 * - No tiene estilos ni lógica de presentación.
 * - Simplemente pasa los datos al componente base `GameOptionCard`.
 */
const GameOption: React.FC<GameOptionProps> = ({ name, description, onSelect }) => {
  return (
    <GameOptionCard
      title={name} // Pasamos el nombre del juego como título al componente base.
      subtitle={description} // Pasamos la descripción como subtítulo (opcional).
      onPress={onSelect} // Pasamos la función de selección.
    />
  );
};

export default GameOption; // Exportamos el componente como el contenedor para su uso en otras partes.