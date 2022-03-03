# Sesión 05

- Repaso estructura de datos
- Copiar una plantilla para iniciar un nuevo proyecto
- Botones para detonar distintos resultados

## Nota importante antes de iniciar

- El evento de reproducción se ejecuta solo hasta que hay un evento gestual del usuario en pantalla

- Optimización de archivos.

`ffmpeg -i 1.mov -c:v libx264 -preset slow -crf 22 -c:a copy 1out.mov`

## Previsualización de un video

- Determinar cantidad de filas y columnas
- Determinar tamaño de cada cuadro (relación entre tamaño y repeticion )
- Cantidad final de imágenes
- Imagen actual
- intervalo actual en X y Y
- Hacer coincidir el tamaño del canvas con el tamaño de la imagen o con alguna escala
- cargar el archivo

- [readyState](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState) == 4

## Para el futuro

En todos los atoms aparece la info de github?
Guardar todos los recursos en una misma carpeta
Sitio interactivo con las entregas 
