const { Schema, model } = require("mongoose");
const reactionSchema = require ('./reaction');

const thoughtSchema = new Schema(
    {
        throughText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date, 
            default: Date.now(),
            get: dateFormat => moment(dateFormat).format("MM Do YY")
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
)

const Thought = model ('Thought', thoughtSchema)

module.exports = thoughtSchema;
