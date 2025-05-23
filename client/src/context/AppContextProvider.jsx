import React, {  useEffect, useState } from "react";
import { AppContext } from "./AppContext"; // import from AppContext.js
// import { dummyCourses } from "../assets/assets";
import {   useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration';
import {useAuth , useUser} from '@clerk/clerk-react';
import axios from 'axios';
import { toast } from "react-toastify";


export const AppContextProvider = ( props ) => {

const backendUrl = import.meta.env.VITE_BACKEND_URL
const currency = import.meta.env.VITE_CURRENCY
const navigate = useNavigate()
const {getToken} = useAuth();
const {user} = useUser();
const [allCourses,setAllCourses] = useState([]);
const [isEducator,setisEducator] = useState(false);
const [enrolledCourses,setEnrolledCourses] = useState([]);
const [userData,setUserData] = useState(null);

//fetch all courses
const fetchAllCourses = async()=>{
  try {
  const {data} =  await axios.get(backendUrl + '/api/course/all')
 if (data.success) {
   setAllCourses(data.courses)
  console.log(data);
  
 }
 else{
   toast.error(data.message)
 }
  } catch (error) {
    toast.error(error.message)
  }
}

const fetchUserData =  async()=>{
if(user.publicMetadata.role==='educator'){
  setisEducator(true)
}
try {
  const token = await getToken();
  const {data} = await axios.get(backendUrl + '/api/user/data' , {headers:
    {Authorization:`Bearer ${token}`}
  })

if(data.success){
  setUserData (data.data)
  console.log(data);
  
}
else{
  toast.error(data.message)
}
} catch (error) {
    toast.error(error.message)
}
}


//funct to calc avg rating of course
const calcAvgRating = (course) => {
  if(course.courseRatings.length===0){
    return 0;
  }
  let totalRating = 0;
  course.courseRatings.forEach(rating=>{
    totalRating += rating.rating
  })
return Math.floor(totalRating/course.courseRatings.length) 
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
try {
 const token = await getToken();
 const {data} = await axios.get(backendUrl+ '/api/user/enrolled-courses' , 
  {headers: {Authorization: `Bearer ${token}`}});
 if(data.success){
  setEnrolledCourses(data.enrolledCourses.reverse())
 }
 else{
  toast.error(data.message)
 } 
} catch (error) {
  toast.error(error.message)
}

}
useEffect(()=>{
  fetchAllCourses()
},[])

useEffect(()=>{
if(user){
fetchUserData();
fetchUserEnrolledCourses();
}
},[user])

  const value = {
  currency , allCourses , navigate , calcAvgRating , isEducator , setisEducator ,
   calcNoOfLect , calcCourseDuration , calcCourseChapTime , enrolledCourses , 
   fetchUserEnrolledCourses , backendUrl , userData , 
   setUserData , getToken , fetchAllCourses , 
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
