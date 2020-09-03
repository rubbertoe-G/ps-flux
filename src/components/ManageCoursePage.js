import React, { useState } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
const ManageCoursePage = () =>{

  const [course, setCourse] = useState({
    id: null,
    slug:"",
    title:"",
    authorIdnull,
    category: ""  
  });

  handleChange = ({target}) => { // de3structuring event.target --> target
    // const updatedCourse = {
    //   ...course, 
    //   [target.name]: target.value
    // };
    // updatedCourse.title = event.target.value
    setCourse({
      ...course, 
      [target.name]: target.value
    });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    courseApi.saveCourse(course).then(() =>{
      props.history.push("/courses");
    })

  }
  
  return(
    <>
      <h2>Manage Course</h2>
      <Prompt when={true} message="Are you sure you want to leave?"/>
      <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit}/>
    </>
  )
}

export default ManageCoursePage;