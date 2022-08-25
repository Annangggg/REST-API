# REST-API
Inlämningen 3 - Webutveckling

Uppgiftsbeskrivningen:
-- I denna uppgift skapar jag ett enklare REST-API i NodeJS med express och typescript. REST-API har 4 endpoints (CRUD) för att hämta, posta, deleta och updatera en bok. 

- För att kompilera ett TypeScript-projekt till ett giltigt JavaScript börjar jag med att deklarera ett nytt skript som heter "build" inuti filen package.json.
- En server.ts fil för att trigga en minimal server.
- En server.rest fil för att endpointen ska kunna nås via REST Clienten.
- I source map har jag en controllers map för att separera ruttkonfigurationen från koden som slutligen (efter eventuell mellanprogramvara) bearbetar en ruttförfrågan, anropar ovanstående servicefunktioner vid behov och ger ett svar till klienten. 
- En routes map för att definiera de förfrågningar som vårt API kan hantera.
- Filen tsconfig.json anger de ursprungliga filerna och kompilator alternativen som behövs för att kompilera projektet.


-- Vad jag har gjort:
- [x] 1. Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] 2. Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http) 
- [x] 3. Datan som API:et hanterar sparas lokalt i serverfilen
- [x] 4. APIét ska svara med 404 om datan saknas.
- [x] 5. Git & GitHub har använts
- [x] 6. Projektmappen innehåller en README.md fil - (läs ovan för mer info) 
- [x] 7. Uppgiften lämnas in i tid!






