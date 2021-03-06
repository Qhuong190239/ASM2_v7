const{ObjectId,MongoClient} = require('mongodb');
//const url = 'mongodb://localhost:27017';
const url = 'mongodb+srv://Qhuong:251Ha@cluster0.h42lt.mongodb.net/test';

async function getDB() {
    const client = await MongoClient.connect(url);
    const dbo = client.db("ASM2v15");
    return dbo;
}

async function insertStudent(newStudent) {
    const dbo = await getDB();
    await dbo.collection("students").insertOne(newStudent);
}

async function updateStudent(id, nameInput, tuoiInput, pictureInput) {
    const filter = { _id: ObjectId(id) };
    const newValue = { $set: { name: nameInput, tuoi: tuoiInput, picture: pictureInput } };

    const dbo = await getDB();
    await dbo.collection("students").updateOne(filter, newValue);
}

async function getStudentById(id) {
    const dbo = await getDB();
    const s = await dbo.collection("students").findOne({ _id: ObjectId(id) });
    return s;
}

async function deleteStudent(id) {
    const dbo = await getDB();
    await dbo.collection("students").deleteOne({ _id: ObjectId(id) });
}

module.exports = {getDB,insertStudent,updateStudent,getStudentById,deleteStudent}











// exports.getDB = getDB;
// exports.insertStudent = insertStudent;
// exports.updateStudent = updateStudent;
// exports.getStudentById = getStudentById;