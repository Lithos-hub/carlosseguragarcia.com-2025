import fs from "fs";
import path from "path";
import { ref } from "vue";

export const useProjectFiles = () => {
  const files = ref<string[]>([]);
  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  const getAllFiles = (
    dirPath: string,
    arrayOfFiles: string[] = [],
  ): string[] => {
    // Esta función solo se ejecutará en el servidor
    if (process.server) {
      try {
        const files = fs.readdirSync(dirPath);

        files.forEach((file) => {
          const fullPath = path.join(dirPath, file);
          if (fs.statSync(fullPath).isDirectory()) {
            getAllFiles(fullPath, arrayOfFiles);
          } else {
            arrayOfFiles.push(fullPath);
          }
        });
      } catch (err) {
        console.error("Error al leer archivos:", err);
        error.value = err instanceof Error ? err : new Error(String(err));
      }
    }

    return arrayOfFiles;
  };

  const loadProjectFiles = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      // Usamos un endpoint del servidor para obtener los archivos
      const { data } = await useFetch("/api/project-files");
      files.value = data.value as string[];
    } catch (err) {
      console.error("Error al cargar archivos:", err);
      error.value = err instanceof Error ? err : new Error(String(err));
    } finally {
      isLoading.value = false;
    }
  };

  return {
    files,
    isLoading,
    error,
    loadProjectFiles,
  };
};
