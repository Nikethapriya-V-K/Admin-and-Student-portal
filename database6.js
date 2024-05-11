
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nikethakalidass30:2Q1xt8SHXivvypfM@cluster0.4j6gchx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect()
async function showalldata(mydata)
{
  try {
    const dataset=await client.db("billingbook").collection("Course-details").insertOne(mydata)
    console.log("my answer:",JSON.stringify(dataset))
    return JSON.stringify(dataset)
  }
  catch {
    console.log("db closed")
    await client.close()
  }
}
module.exports={showalldata}
