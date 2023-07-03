# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

ENV usuario_api_tecnoback=83150900-7
ENV clave_api_tecnoback=195582adc827d0c0c6a2f0857c8a51be
ENV base_url_tecnoback=https://apicert.tecnoback.com/v1
ENV apikey_tecnoback=PQJYdmL3tk3HpUd30EfbEUcd7USHXWLbdk3okd30
ENV rut_emisor_tecnoback=83150900-7

ENV oracle_username="CORONA"
ENV oracle_password="CORONA"
ENV oracle_connection_string="(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=xe)))"

ENV PORT=3000

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
