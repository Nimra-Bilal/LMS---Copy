import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext"; // import from AppContext.js
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'
export const AppContextProvider = ( props ) => {

  const currency = import.meta.env.VITE_CURRENCY
const navigate = useNavigate()
const [allCourses,setAllCourses] = useState([]);
const [isEducator,setisEducator] = useState(true);
const [enrolledCourses,setEnrolledCourses] = useState([]);

//fetch all courses
const fetchAllCourses = async()=>{
  setAllCourses(dummyCourses)

}
useEffect(()=>{
  fetchAllCourses()
  fetchUserEnrolledCourses()
},[])

//funct to calc avg rating of course
const calcAvgRating = (course) => {
  if(course.courseRatings.length===0){
    return 0;
  }
  let totalRating = 0;
  course.courseRatings.forEach(rating=>{
    totalRating += rating.rating
  })
return totalRating/course.courseRatings.length
} 

//function to calculate course chap time
const calcCourseChapTime = (chapter) => {
let time = 0;
chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration)
return humanizeDuration(time*60*1000,{units:["h","m"]})
}
 
//funct to calc course duration
const calcCourseDuration = (course) => {
  let time = 0;
course.courseContent.map((chapter)=>chapter.chapterContent.map(
  (lecture)=>time+=lecture.lectureDuration
))
return humanizeDuration(time*60*1000,{units:["h","m"]})

}

//funct to calc no. of lects in course 
const calcNoOfLect = (course)=>{
let totallecture = 0
course.courseContent.forEach(chapter=>{
  if(Array.isArray(chapter.chapterContent)){
    totallecture += chapter.chapterContent.length
  }
});
return totallecture
}

//fetch user enrolled courses
const fetchUserEnrolledCourses = async()=>{
  setEnrolledCourses(dummyCourses)
}

  const value = {
  currency , allCourses , navigate , calcAvgRating , isEducator , setisEducator , calcNoOfLect , calcCourseDuration , calcCourseChapTime , enrolledCourses , fetchUserEnrolledCourses
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
