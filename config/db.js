const mongoose = require('mongoose');

const connectDB = async () => {
    main().catch(err => console.log(err));

    async function main() {
    const connected = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connected.connection.host}`.blue.underline)

    }
}

module.exports = connectDB;