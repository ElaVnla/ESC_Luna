// Youtube tutorial on setting up TypeORM with Express
// https://www.youtube.com/watch?v=TLn5TGbmVkU

import { DataSource } from "typeorm"; 

const connectDB = new DataSource({
    type: "mysql",
    // <database>://<username>:<password>@<host>:<port>/<database>
    url: "mysql://root:root@localhost:3306/lunadb",
    synchronize: true, // Automatically create database schema
    entities: [__dirname + "/../src/entities/**/*.js"],
    extra: {
        ssl: {
            rejectUnauthorized: false // Disable SSL verification for local development
        }
    }
});