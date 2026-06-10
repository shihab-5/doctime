import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("doctime");

export const auth = betterAuth({
  trustedOrigins: ['http://localhost:3000',],
  database: mongodbAdapter(db, {
    client
  }),
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, },
  emailAndPassword:{
    enabled:true
  }
});