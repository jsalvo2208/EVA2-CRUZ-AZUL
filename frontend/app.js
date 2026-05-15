const express = require('express');
const { Pool } = require('pg');
const app = express();

app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  user: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: 'farmacia_db',
  password: 'Inacap.654321',
  port: 5432,
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM productos');
  let html = `
    <h1>ERP Farmacias Cruz Azul - Gestión de Inventario</h1>
    <form method="POST" action="/add">
      <input type="text" name="nombre" placeholder="Nombre Producto" required>
      <input type="number" name="precio" placeholder="Precio" required>
      <input type="number" name="stock" placeholder="Stock" required>
      <button type="submit">Guardar Producto</button>
    </form>
    <table border="1" style="margin-top: 20px; width: 50%;">
      <tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Stock</th></tr>`;
  
  result.rows.forEach(row => {
    html += `<tr><td>${row.id}</td><td>${row.nombre}</td><td>$${row.precio}</td><td>${row.stock}</td></tr>`;
  });
  html += `</table>`;
  res.send(html);
});

app.post('/add', async (req, res) => {
  const { nombre, precio, stock } = req.body;
  await pool.query('INSERT INTO productos (nombre, precio, stock) VALUES ($1, $2, $3)', [nombre, precio, stock]);
  res.redirect('/');
});

app.listen(80, () => console.log('Frontend Cruz Azul operando en puerto 80'));
