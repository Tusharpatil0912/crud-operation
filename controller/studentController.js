import { studentModel } from "../models/Student.js"

class studentController {

    static createDoc = async (req, res) => {
        try {
            const { name, age, fees } = req.body
            const doc = new studentModel({
                name: name,
                age: age,
                fees: fees
            })
            //saving document
            const result = await doc.save()
            // console.log(result);
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await studentModel.find()
            // console.log(result);
            res.render('index', { data: result })
        } catch (error) {
            console.log(error)
        }
    }

    static editDoc = async (req, res) => {
        try {
            const result = await studentModel.findById(req.params.id)
            //console.log(result);
            res.render('edit', { data: result })
        } catch (error) {
            console.log(error);
        }
    }

    static updateDocById = async (req, res) => {
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body);
            console.log(result);
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }

    static deleteDocById = async (req, res) => {
        try {
            const result = await studentModel.findByIdAndDelete(req.params.id)
            res.redirect('/')
        } catch (error) {
            console.log(error);
            
        }
        
    }

}
export { studentController }