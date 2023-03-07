import mongoose from 'mongoose';
import { PORT } from './constants';
import "dotenv/config";

import * as serverService from './services/server.service';


(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ngocdiep219:5YCWaHcsV4lZALM8@cluster0.opstq93.mongodb.net/?retryWrites=true&w=majority"
    );
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('listening on PORT', PORT);
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
