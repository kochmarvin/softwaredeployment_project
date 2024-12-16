# Verwende ein offizielles Node.js-Image als Basis
FROM node:22

# Arbeitsverzeichnis im Container festlegen
WORKDIR /app

# Package.json und package-lock.json kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Anwendungscode kopieren
COPY . .

# Port freigeben
EXPOSE 3000

# Startbefehl
CMD ["npm", "start"]
