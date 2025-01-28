/**
 * Genera una URL para buscar una palabra en la API de Wiktionary.
 * @param word - La palabra a buscar.
 * @returns La URL generada.
 */
export const generateWiktionaryUrl = (word: string): string => {
  const url = `https://es.wiktionary.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(
    word
  )}&prop=extracts&explaintext=true&redirects=1&origin=*`;
  console.log(`URL generada para la palabra "${word}": ${url}`); // Log para depurar la URL
  return url;
};
