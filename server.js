const express = require('express');
const db = require('./db'); // Importa la conexión
const app = express();
const port = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Vehículos');
});

// Endpoint: Buscar modelos por marca desde la base de datos
app.get('/api/vehiculos/:marca', async (req, res) => {
  const marca = req.params.marca;

  try {
    // Realiza una consulta a la base de datos
    const [rows] = await db.query('SELECT nom_modelo FROM modelo_vehiculo WHERE nom_marca = ?', [marca]);

    if (rows.length > 0) {
      const modelos = rows.map(row => row.modelo);
      res.json({ marca, modelos });
    } else {
      res.status(404).json({ mensaje: `No se encontraron modelos para la marca "${marca}".` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });

  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
