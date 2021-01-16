# COMANDOS BASICOS DE GIT

1. **git init:** se utiliza para iniciar git dentro del proyecto. Solo se ejecuta una vez al comienzo del todo.
2. **git status / git status -s / git checkout:** comando para verificar los archivos o carpetas que aun no se han enviando al repositorio remotamente.
3. **git add . / git add -A:** comando para agregar temporalmente los archivos en un area antes de realizar el commit al repositorio.  
4. **git reset .:** comando para regresar los archivos de nuevo al proyecto los cuales se agregaron temporalmente con el comando git add . / git add -A, de esta manera si algun archivo necesita correciones se puede realizar y evitar que sea subido de esta manera.
5. **git commit -m "mensaje":** comando para tomar la fotografia virtual de los archivos creados dentro del proyecto.
6. **git push origin "nombre del branch":** comando para enviar los archivos al repositorio de forma remota con el branch activo en el momento.
7. **git log:** comando para ver todos los push que se han realizado hasta el momento, ya sea con cualquier branch que este creado.
7. **git branch:** comcomando para verificar los branch que existen dentro del proyecto con los que se estan trabajando.
8. **git checkout -b "nombre del branch":** comando para crear un nuevo branch para trabajar dentro del proyecto.
9. **git branch -d "nombre del branch":** comando para eliminar un branch que este creado previamente dentro del proyecto.
10. **git checkout "nombre del branch":** comando para cambiar de branch a algun otro que ya este creado previamente.
11. **git checkout -- .:** comando para recuperar el contenido de cada archivo que esta en el repositorio desde el ultimo commit realizado.
12. **git remote add origin "link del repositorio":** comando para enlazar un repositorio local a un servidor remoto.
13. **git remote rm origin:** comando para desvincular el repositorio local con el servidor remoto conectado.
14. **git remote -v:** comando para verificar a que servidor remoto esta conectado nuestro repositorio local.
15. **git merge "nombre del branch:"** comando para unir los archivos creados de un branch secundario al main branch.














