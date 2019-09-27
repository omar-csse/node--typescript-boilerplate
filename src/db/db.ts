import { MongoClient, MongoClientOptions, Db } from 'mongodb'
import process from '../types/env'

class DB {

    private static options: MongoClientOptions;
    private static url: string;
    protected static db: Db | undefined;

    constructor(url:string, options:object) {
        DB.options = {useNewUrlParser: true, useUnifiedTopology: true, ...options};
        DB.url = url;
    }

    public static async connect(): Promise<any> {
        await MongoClient.connect(this.url, DB.options)
            .then((client:MongoClient) => {DB.db = client.db(process.env.DB_NAME)})
            .then(() => console.info("MongoDB connected!"))
            .catch((err:Error) => console.log(err));
    }

    static dbInstance = new DB(<string>process.env.DB_URI, {reconnectTries: 10});
}

export default DB;