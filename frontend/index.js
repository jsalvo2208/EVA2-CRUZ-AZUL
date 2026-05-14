const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
  host: process.env.DB_HOST || 'db_server',
  user: 'postgres',
  password: process.env.DB_PASSWORD || 'Inacap.654321',
  database: 'farmacia_db',
  port: 5432
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos');
    let rows = result.rows.map(p => `<tr><td>${p.id}</td><td>${p.nombre}</td><td>$${p.precio}</td><td>${p.stock}</td></tr>`).join('');
    
    res.send(`
      <html>
        <head><style>
          body { font-family: sans-serif; background: #eef2f7; padding: 50px; }
          table { width: 100%; border-collapse: collapse; background: white; border: 2px solid #003399; }
          th { background: #003399; color: white; padding: 15px; }
          td { padding: 12px; text-align: center; border-bottom: 1px solid #ddd; }
        </style></head>
        <body>
          <h1>ERP Cruz Azul - Panel de Control Cloud</h1>
          <table>
            <tr><th>ID</th><th>Producto</th><th>Precio</th><th>Stock</th></tr>
            ${rows}
          </table>
          <p>Infraestructura: <strong>AWS EC2 + Docker Containers</strong></p>
        </body>
      </html>
    `);
  } catch (err) {
    res.status(500).send("Error de conexión: " + err.message);
  }
});

app.listen(80, () => console.log('Frontend activo'));