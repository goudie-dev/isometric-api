import { Model, Schema } from 'mongoose';

import { ISettings } from '@dgoudie/isometric-types';
import { handleMongooseError } from '../../utils/mongoose-error-middleware';
import mongoose from 'mongoose';

const settingsSchema = new Schema<ISettings>(
    {
        //@ts-ignore
        userId: { type: mongoose.Types.ObjectId },
    },
    { timestamps: true }
);

settingsSchema.post('save', handleMongooseError);

const Settings = mongoose.model('Settings', settingsSchema);

export default Settings;