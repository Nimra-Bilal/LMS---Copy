import express from 'express'
import { addUserRating, getUserCourseProgress, getUserData,
    purchaseCourse,updateUserCourseProject,
    userEnrolledCourses } from '../controllers/userController.js'

const userRouter=express.Router();

userRouter.get('/data',getUserData);
userRouter.get('/enrolled-courses',userEnrolledCourses);
userRouter.post('/purchase',purchaseCourse)
userRouter.post('/update-course-progress',updateUserCourseProject)
userRouter.post('/get-course-progress',getUserCourseProgress)
userRouter.post('/add-rating',addUserRating)
export default userRouter;