require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const maintenanceRoutes = require('./routes/maintenanceRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', maintenanceRoutes);

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Maintenance Service operando 100% na porta ${PORT}`);
});