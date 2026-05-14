CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    precio INT NOT NULL,
    stock INT NOT NULL
);

INSERT INTO productos (nombre, categoria, precio, stock) VALUES
('Paracetamol 500mg', 'Analgésico', 1500, 100),
('Ibuprofeno 400mg', 'Antiinflamatorio', 2200, 50),
('Vitamina C 1g', 'Suplemento', 4500, 30),
('Amoxicilina 500mg', 'Antibiótico', 8990, 20);