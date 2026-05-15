CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INTEGER NOT NULL
);

INSERT INTO productos (nombre, precio, stock) VALUES
('Paracetamol 500mg', 1500.00, 100),
('Ibuprofeno 400mg', 2200.00, 50),
('Aspirina 100mg', 3500.00, 80);
