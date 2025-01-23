import dotenv from "dotenv";
import {app} from "./app.js";

dotenv.config({
	path: './env'
});

app.get('/', (req, res) => {
	res.send('Hello from Express!');
});
app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port http://localhost:${process.env.PORT}/`);
});