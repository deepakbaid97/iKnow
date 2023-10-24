import express from "express";
import { ChatOllama } from "langchain/chat_models/ollama";
import { StringOutputParser } from "langchain/schema/output_parser";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

const __dirname = "/Users/deepakbaid/Desktop/iKnowProject/iKnowBackend"

app.get('/', (req, res) => {
    //res.send('Hello, ES6 Express Server!');
    res.sendFile(path.join(__dirname, "../iKnowFrontend/dist/", 'index.html'))
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "../iKnowFrontend/dist/")));

app.post('/doYouKnow', async (req, res) => {
    console.log('req', req.body);
    const stream = await model
      .pipe(new StringOutputParser())
      .stream(req.body.data.question);

      const chunks = [];
      for await (const chunk of stream) {
        chunks.push(chunk);
      }
    res.send(chunks.join(""));
    // res.send('WELCOME');
})

app.listen(port, () => {
    console.log(`iKNOW Project Server is running on port ${port}`);
});

const model = new ChatOllama({
  baseUrl: "http://localhost:11434", // Default value
  model: "llama2", // Default value
  temperature: 0.2,
});



// console.log(chunks.join(""));