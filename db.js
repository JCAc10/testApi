const mysql = require('mysql2');

// Configura la conexión
const pool = mysql.createPool({
  host: 'sql201.infinityfree.com', // Cambia esto por el host de tu cPanel
  user: 'if0_37668353', // Usuario de la base de datos
  password: 'kqx4eFDnYCMgR ', // Contraseña del usuario
  database: 'if0_37668353_lubricentro_shiroma', // Nombre de la base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise(); // Exporta la conexión para usarla con promesas
