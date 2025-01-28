import { extractDefinition } from "./ExtractDefinition";
import { generateWiktionaryUrl } from "./GenerateWiktionaryURL";
import { fetchFromWiktionary } from "./WiktionaryFetch";

/**
 * Busca definiciones para un array de palabras en español utilizando la API de Wiktionary.
 * @param words - Array de palabras a buscar.
 * @returns Array de objetos con la palabra y su definición.
 */
export const fetchDefinitions = async (
  words: string[]
): Promise<{ word: string; clue: string }[]> => {
  const results: { word: string; clue: string }[] = [];

  for (const word of words) {
    try {
      console.log(`Buscando definición para: ${word}`); // Log para cada palabra
      const url = generateWiktionaryUrl(word);
      const extract = await fetchFromWiktionary(url);

      if (extract) {
        const definition = extractDefinition(extract);
        results.push({ word, clue: definition });
      } else {
        console.warn(`No se encontró definición para "${word}".`);
        results.push({ word, clue: "Definición no encontrada" });
      }
    } catch (error) {
      console.error(`Error al procesar la palabra "${word}":`, error);
      results.push({ word, clue: "Definición no encontrada" });
    }
  }

  console.log("Resultados de definiciones:", results); // Log para el resultado final
  return results;
};
