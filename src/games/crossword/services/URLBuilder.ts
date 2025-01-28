const BASE_URL = "https://www.freeapidatabase.com/View/methodget.php";
const AUTH_HEADER = {
  Authorization: "Bearer $2y$10$KmrKR64m08sJGCkrtFZfsuS1FVARkLHX4wJNGSnJiEih6p0Aluihm",
};

/**
 * Genera una URL completa con los parámetros especificados.
 * @param params - Objeto con los parámetros a incluir en la URL.
 * @returns La URL completa.
 */
export const buildUrl = (params: Record<string, string | number | boolean>): string => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, String(value));
    }
  });

  return `${BASE_URL}?${queryParams.toString()}`;
};

export const headers = AUTH_HEADER;