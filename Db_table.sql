-- Table Fields --
-- color : "blue",
-- brand : "Mike",
-- price :  350,
-- in_stock : 5

-- TABLE --
CREATE TABLE shoes (
    id SERIAL PRIMARY KEY,
    brand TEXT NOT NULL,
    color TEXT NOT NULL,
    size TEXT NOT NULL,
    price TEXT NOT NULL,
    in_stock INTEGER NOT NULL DEFAULT 1
);

-- PRE-POPULATED TEST DATA --
INSERT INTO shoes (color, brand, price, size) VALUES 
('blue','Mike',350,7),
('green','Mike',350,8),
('orange','Abi',275,5);

