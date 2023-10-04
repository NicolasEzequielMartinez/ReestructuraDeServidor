import mongoose from "mongoose";
import { messageModel } from "../models/messages.model.js"
import config from '../../../config.js';

export default class MessageManager {

    // MONGOOSE
    connection = mongoose.connect(
        config.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    async nuevoMensaje(sms) {
        let result = await messageModel.create(sms);
        return result;
    };

    async verMensajes() {
        let result = await messageModel.find().lean();
        return result;
    }

    async eliminarMensaje(mid) {
        let result = await messageModel.deleteOne({_id: mid})
        return result;
    };
}