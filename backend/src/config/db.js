import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log('MongoDB kết nối thành công');
    } catch (error) {
        console.log('MongoDB kết nối thất bại:', error);
        process.exit(1);
    }
}

export default connectDB;