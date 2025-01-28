/**
 * Extrae una definición clara de un extracto de Wiktionary.
 * @param extract - Texto del extracto obtenido de Wiktionary.
 * @returns La definición encontrada o "Definición no encontrada".
 */
export const extractDefinition = (extract: string): string => {
    if (!extract) {
      console.warn("Extracto vacío recibido.");
      return "Definición no encontrada";
    }
  
    console.log("Procesando extracto:", extract);
  
    // Dividir el extracto en líneas
    const lines = extract.split("\n");
  
    // Buscar líneas que podrían contener definiciones
    for (const line of lines) {
      if (
        /^\d+\s/.test(line) || // Línea numerada
        /^[A-Za-záéíóúüñ]/.test(line) // Línea que comienza con texto
      ) {
        const cleanedLine = line.replace(/^\d+\s/, "").trim();
        if (cleanedLine.length > 20) { // Asegurarse de que sea una definición útil
          console.log("Definición encontrada:", cleanedLine);
          return cleanedLine;
        }
      }
    }
  
    console.warn("No se encontró definición válida en el extracto.");
    return "Definición no encontrada";
  };
  