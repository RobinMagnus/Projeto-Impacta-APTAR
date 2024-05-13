@echo off
cd ../BackEnd        // Navega para o diretório do backend Java
mvn spring-boot:run    // Inicia o backend Java
cd ../FrontEnd    // Navega para o diretório do frontend Angular
ng serve         // Inicia o servidor de desenvolvimento do Angular
