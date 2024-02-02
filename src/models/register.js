const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const employeeSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }

})

employeeSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const Login = new mongoose.model("Login", employeeSchema)

module.exports = Login