const { json } = require("body-parser");
let EmployeeModel = require("../model/employee.model.js");

let getAllEmployeeDetails = (req, res) => {
    EmployeeModel.find({}, (err, data) => {
        if (!err) {
            res.json(data);
        }
    })
}


let login = (req, res) => {
    let empidAtt = req.body.empId;
    let passwordAtt = req.body.password;
    EmployeeModel.findOne({ _id: empidAtt }, (err, data) => {
        if (!err) {
            if (data.password === passwordAtt) {
                if (data.password === "password123") {
                    res.send("Login successful and update password");
                }
                else { res.send("Login successful"); }
            } else {
                res.send("Incorrect password")
            }
        } else {
            res.send("Invalid username");
        }
    })
}



let updatePassword = (req, res) => {
    let newPassword = req.body.newPassword;
    let empID = req.body.empId;
    let oldPassword = req.body.oldPassword;
    EmployeeModel.findOne({ _id: empID }, (err, data) => {
        if (!err) {
            if (oldPassword === data.password) {
                if (newPassword === data.password) { res.send("New password cannot be the same as the old password") }
                else {
                    EmployeeModel.updateOne({ _id: empID }, { $set: { password: newPassword } }, (err, data) => {
                        if (!err) {
                            res.send("Password updated successfully");
                        } else {
                            res.send("Something went wrong...");
                        }
                    })
                }

            } else {
                res.send("Your old password is wrong...")
            }
        }
    })
}







let createNewEmployee = (req, res) => {
    let holdArr = [];

    EmployeeModel.find({}, (err, data) => {
        if (!err) {
            holdArr = data
            let nextID = (holdArr.length == 0) ? 100 : holdArr[holdArr.length - 1]._id + 1;
            let newEmp = new EmployeeModel({
                _id: nextID,
                fName: req.body.employeeFirstName,
                lName: req.body.employeeLastName,
                email: req.body.employeeEmailId,
                username: req.body.employeeUserName,
                password: "password123"
            });
            newEmp.save((err, data) => {
                if (!err) {
                    res.send("New Employee Added Successfully")
                } else {
                    res.send("Something went wrong...")
                }
            })
        } else {
            res.send("Something went wrong...")
        }
    });
}

let deleteEmployeeById = (req, res) => {
    EmployeeModel.deleteOne({ _id: req.params.eid }, (err, data) => {
        if (!err) {
            if (data.deletedCount == 1) { res.send("Employee deleted successfully "); }
            else { res.send("Employee not found") }
        } else {
            res.send("Something went wrong...");
        }
    })
}

let updateName = (req, res) => {
    let id = req.params.employeeID;
    let fName = req.params.fName;
    let lName = req.params.lName;
    EmployeeModel.updateOne({ _id: id }, { $set: { fName: fName, lName: lName } }, (err, data) => {
        if (!err) {
            if (data.nModified == 1) {
                res.send("Successfully updated user name");
            } else {
                res.send("User does not exist")
            }
        } else {
            res.send("Something went wrong")
        }
    })
}

let updateEmail = (req, res) => {
    let id = req.params.employeeID;
    let email = req.params.email;
    EmployeeModel.updateOne({ _id: id }, { $set: { email: email } }, (err, data) => {
        if (!err) {
            if (data.nModified == 1) {
                res.send("Successfully updated user email");
            } else {
                res.send("User does not exist")
            }
        } else {
            res.send("Something went wrong")
        }
    })
}

let updateUsername = (req, res) => {
    let id = req.params.employeeID;
    let username = req.params.username;
    EmployeeModel.updateOne({ _id: id }, { $set: { username: username } }, (err, data) => {
        if (!err) {
            if (data.nModified == 1) {
                res.send("Successfully updated username");
            } else {
                res.send("User does not exist")
            }
        } else {
            res.send("Something went wrong")
        }
    })
}

module.exports = { login, createNewEmployee, updatePassword, deleteEmployeeById, updateName, updateEmail, updateUsername, getAllEmployeeDetails }
