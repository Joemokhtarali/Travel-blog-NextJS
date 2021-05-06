import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        'mongodb+srv://joemokhtarali:riseandfall1@passportshub.3u714.mongodb.net/my-site?retryWrites=true&w=majority',
        { useUnifiedTopology: true }
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to DB" });
      return;
    }

    const db = client.db('my-site');

    try {
      const result = await db.collection("passports").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "storing message failed" });
      return;
    }

    client.close();
    res.status(201).json({ message: "success", message: newMessage });
  }
}

export default handler;
