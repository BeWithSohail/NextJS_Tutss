import mongoose from 'mongoose';
console.log("database url", process.env.DATABASE_URL)
const connectDB = async () => {
    try {
        const DB_OPTIONS = {
            dbName: process.env.DBNAME,
            dbUserName: process.env.DBUSERNAME,
            dbPassword: process.env.DBPASSWORD,
            dbAuthSource : process.env.DBAUTHSOURCE
        }
        await mongoose.connect(process.env.DATABASE_UR, DB_OPTIONS);
        console.log("connected successfully");
    } catch (error) {
        console.error("error", error)
     }
}

export { connectDB };
