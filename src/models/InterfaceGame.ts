// Principio de responsabilidad única
export interface InterfaceGame{
    id: string; // Identificador único de cada minijuego 
    name: string // Nombre de cada minijuego
    description: string; // Descripción general de cada minijuego
    component: React.ComponentType; // Componente principal del juego
}