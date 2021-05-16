FROM node:13.12.0-alpine

# instalar un simple servidor http para servir nuestro contenido estático
#RUN npm install -g http-server

# hacer la carpeta 'app' el directorio de trabajo actual
WORKDIR /app


# copiar 'package.json' y 'package-lock.json' (si están disponibles)
COPY package*.json ./

# instalar dependencias del proyecto
RUN npm install 
# --silent

# copiar los archivos y carpetas del proyecto al directorio de trabajo actual (es decir, la carpeta 'app')
COPY . .

# construir aplicación para producción minificada
#RUN npm run build

#CMD [ "http-server", "dist" ]
CMD [ "npm", "start" ]
#CMD ["ash"]