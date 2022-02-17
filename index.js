import express from "express";
import cors from "cors"

const app = express()

const PORT = 5000


let corsOption = {
	origin: `http://localhost:${PORT}`,
};


app.use(cors(corsOption))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/", (req,res) => {
    res.json({message:"Welcome to consumo api"})
})

/*


api/listall  GET get all contents(movies and books you want to watch)
api/listall/finished  GET get all contents which are finished(movies and books you want to watch)

api/add     POST add a new content

api/delete/:id  DELETE remove a content by id


*/



app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`)
);