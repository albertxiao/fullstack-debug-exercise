import express from 'express';
import cors from "cors";
import routes from './routes';

const app = express();


// Allow all origins
app.use(cors());

// OR if you want to be explicit:
app.use(cors({
  origin: "*", // allow all origins
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use('/api', routes);

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));
