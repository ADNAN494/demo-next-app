const username = process.env.myusername
const password = process.env.mypassword

if(!username || !password){
    throw new Error("Missing Mongodb Credentials");
}

export const connection = `mongodb+srv://adnan:${password}@cluster0.kao5s.mongodb.net/my_db?retryWrites=true&w=majority&appName=Cluster0`;