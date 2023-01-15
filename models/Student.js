import mongoose from "mongoose";

// create Schema
const studentSchema = new mongoose.Schema({

    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 60 },
    fees: { type: mongoose.Decimal128, required: true, validate: (value) => { value >= 2000 } }
})

// model

const studentModel = mongoose.model('student', studentSchema)

export { studentModel }