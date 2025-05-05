const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;

export const connectionSrt =
  "mongodb+srv://" +
  MONGO_USERNAME +
  ":" +
  MONGO_PASSWORD +
  "@cluster1.dtxx490.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster1";
