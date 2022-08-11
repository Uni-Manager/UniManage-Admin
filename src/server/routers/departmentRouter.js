const express = require("express");
const router = express.Router();
const pool = require("../db");



router.route("/courses").post( async (req,res) => {
    let {course_id,dept_id,name,credit,type} = req.body;
    credit = parseFloat(credit);
    console.log(course_id,dept_id,name,credit,type);
    try{
        const postCourseData = await pool.query(
            `INSERT INTO course VALUES ($1,$2,$3,$4,$5)`,
            [course_id,dept_id,name,credit,type]
        );
        res.status(201).json({
            message: "Successful update",
        });
    }
    catch(err){
        res.status(400).json({error: err});
        console.log(err.message);
    }
});

module.exports = router;
