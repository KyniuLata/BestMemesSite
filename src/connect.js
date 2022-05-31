const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the following with your Atlas connection string
const uri =
  "mongodb+srv://<mojlogindobazy>:<password>@bestmemessite.xeh5b.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const dbName = "Mems";
async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);
    // Use the collection "people"
    const col = db.collection("mems");
    // Construct a document
    let memes = [
      {
        key: 0,
        title: "Mem 1",
        likes: 0,
        dislikes: 0,
        img: "path/to/image1.png",
      },
      {
        title: "Mem 2",
        likes: 0,
        dislikes: 0,
        img: "path/to/image1.png",
      },
      {
        title: "Mem 3",
        likes: 0,
        dislikes: 0,
        img: "path/to/image1.png",
      },
      {
        title: "Mem 4",
        likes: 0,
        dislikes: 0,
        img: "path/to/image1.png",
      },
      {
        title: "Mem 5",
        likes: 0,
        dislikes: 0,
        img: "path/to/image1.png",
      },
    ];

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertMany(memes);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
