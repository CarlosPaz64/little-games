/**
 * Realiza un fetch a la API de Wiktionary para una palabra.
 * @param url - URL generada para la palabra.
 * @returns El extracto de la palabra o null si no se encuentra.
 */
export const fetchFromWiktionary = async (url: string): Promise<string | null> => {
  try {
    console.log(`Realizando fetch a: ${url}`);
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Error en la respuesta de la API de Wiktionary: ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    const pageKey = Object.keys(data.query.pages)[0];

    if (pageKey === "-1") {
      console.warn("No se encontró la palabra en Wiktionary.");
      return null;
    }

    const extract = data.query.pages[pageKey]?.extract || null;
    console.log(`Extracto obtenido para la palabra: ${extract}`);
    return extract;
  } catch (error) {
    console.error("Error al realizar el fetch de Wiktionary:", error);
    return null;
  }
};
