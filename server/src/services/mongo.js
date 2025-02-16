const mongoose = require('mongoose');

// It's better to use environment variables for sensitive information
const MONGO_URL = process.env.MONGO_URL || '';

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

async function mongoConnect() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS:30000,
      connectTimeoutMS:30000,
      socketTimeoutMS:30000
    });
  } catch (err) {
    console.error('Could not connect to MongoDB:', err);
    throw err;
    process.exit(1);
  }
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
