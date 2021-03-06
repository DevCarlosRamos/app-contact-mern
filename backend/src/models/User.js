const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email:{
            type: String
        },
        phone:{
            type: String
        },
        type:{
            type: Boolean
        }

    }, {
        timestamps: true
    });

module.exports = model('User', userSchema);