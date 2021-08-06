import { mysql } from "./deps.ts";
const client = await new mysql.Client().connect({
    hostname: "127.0.0.1",
    username: "root",
    db: "",
    password: "",
});

await client.close();
