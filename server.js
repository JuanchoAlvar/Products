const express = require('express');
const app = express();
const productosRoutes = require('./routes/productos');

app.use(express.json());
app.use('/api/products', productosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});