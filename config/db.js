import mongoose from 'mongoose';
import config from 'config';

// Get MongoDB URI from configuration
const db = config.get('mongoURI');

const connectDatabase = async () => {
    try {
        await mongoose.connect(db)
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error.message);

        process.exit(1);
    }
};

export default connectDatabase;