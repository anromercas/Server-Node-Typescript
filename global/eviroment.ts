// el process.env.PORT es por si se sube a un servidor como heroku que gestiona el puerto por variable de entorno
export const SERVER_PORT: number = Number ( process.env.PORT) || 5000; 