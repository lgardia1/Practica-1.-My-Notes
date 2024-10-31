// Importar librerias
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Usamos la librerias
const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB usando Mongoose
const mongoURI = 'mongodb://localhost:27017/notes';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado a MongoDB'))
    .catch((error) => console.error('Connection error to MongoDB: ', error));

// Definición del esquema
const schemaNotes = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    dateCreate: { type: Date, required: true, default: Date.now },
    typeNote: { type: String, enum: ['normal', 'critical'], required: true, default: 'normal' }
});

// Crear el modelo con el esquema
const Notes = mongoose.model('Notes', schemaNotes);

// La creación de una nota aquí debe estar en un endpoint
app.post('/createNotes', async (req, res) => {
    const { title, content, dateCreate, typeNote } = req.body;

    const nuevaNota = new Notes({
        title,
        content,
        dateCreate: dateCreate ? new Date(dateCreate) : undefined,
        typeNote // Se asigna la prioridad
    });

    try {
        const notaGuardada = await nuevaNota.save();
        res.status(201).json(notaGuardada); // Devuelve la nota creada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
});

//Obtencion de las notas
app.get('/obtainsNotes', async (req, res) => {
    try {
        const notas = await Notes.find(); 
        res.json(notas); 
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
});

app.get('/', (req, res) => {
    res.send('HelloWorld');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listen on http://localhost:${PORT}`);
});
