import { Difficulty } from "../types/Difficulties";
import { buildUrl, headers } from "../services/URLBuilder";

/**
 * Configuración de rangos de longitud según la dificultad.
 */
const lengthByDifficulty: Record<Difficulty, { min: number; max: number }> = {
  Fácil: { min: 3, max: 6 },
  Intermedio: { min: 6, max: 8 },
  Difícil: { min: 9, max: 12 },
};

/**
 * Obtiene palabras aleatorias en español según la dificultad.
 * @param difficulty - Nivel de dificultad seleccionado.
 * @returns Un array de palabras filtradas por longitud.
 */
export const fetchWords = async (difficulty: Difficulty): Promise<string[]> => {
  const { min, max } = lengthByDifficulty[difficulty];

  const url = buildUrl({
    idTbla: 522,
    idProyect: 184,
    resultados_max: 10,
    pagina: 1,
    contiene_longitud_min: min,
    contiene_longitud_max: max,
    orden_random: true,
  });

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`Error en la respuesta de la API: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Datos obtenidos:", data);

    // Extraer las palabras de la clave 'results'
    const words = data.results?.map((item: { Palabra: string }) => item.Palabra) || [];
    console.log("Palabras obtenidas:", words);

    return words;
  } catch (error) {
    console.error("Error al obtener palabras aleatorias:", error);
    return [];
  }
};