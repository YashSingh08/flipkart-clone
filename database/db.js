import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-9knbytj-shard-00-00.c2haaeg.mongodb.net:27017,ac-9knbytj-shard-00-01.c2haaeg.mongodb.net:27017,ac-9knbytj-shard-00-02.c2haaeg.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-aug40u-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error while connection with a databse ', error.message);
    }

};

export default Connection;