const mongoose= require("mongoose");
const Session = require("../models/Session");
const Tutor = require("../models/TutorProfile");
const Course = require("../models/Course");

/**
 * @param {Request} req 
 * @param {Response} res 
 * @returns
 */
async function createStudents(req, res){
    if (!req?.body?.courseId || !req?.body?.tutorId || !req?.body?.title || !req?.body?.dateTime || !req.body.teamsLink) {
        return [400, { "message": "tutorId,courseId,title,dateTime and teamsLink are required" }, null];}
    if (!mongoose.Types.ObjectId.isValid(req.body.courseId)) {
        return [400, { "message": "Course id is not valid." }, null];}
    if (!mongoose.Types.ObjectId.isValid(req.body.tutorId)) {
        return [400, { "message": "tutor id is not valid." }, null];}
    try {
        const result = await Session.create({
            courseId: req.body.courseId,
            tutorId: req.body.tutorId,
            description: req.body.description,
            title: req.body.title,
            dateTime: req.body.dateTime,
            teamsLink: req.body.teamsLink,
            status: req.body.status,
        });
        const touter = await Tutor.findById(req.body.tutorId);
        touter.coursesTaught.push(req.body.courseId);
        await touter.save();
        console.log("Session Created ");
        return [201, { result, touter }, null];
    } catch (err) {
        console.log(err);
        return [500, null, null];
    }
};
