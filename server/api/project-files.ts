import fs from "fs";
import { defineEventHandler } from "h3";
import path from "path";

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  try {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        getAllFiles(fullPath, arrayOfFiles);
      } else {
        // Guardamos la ruta relativa para que sea más manejable
        const relativePath = path.relative(process.cwd(), fullPath);
        arrayOfFiles.push(relativePath);
      }
    });
  } catch (err) {
    console.error("Error al leer archivos:", err);
  }

  return arrayOfFiles;
}

export default defineEventHandler(() => {
  // Obtener archivos desde el directorio raíz del proyecto
  const projectDir = process.cwd();
  const filesArray = getAllFiles(projectDir);

  // Opcionalmente, puedes filtrar archivos o directorios que no quieras incluir
  const filteredFiles = filesArray.filter(
    (file) =>
      !file.includes("node_modules") &&
      !file.includes(".git") &&
      !file.includes(".nuxt"),
  );

  return filteredFiles;
});
