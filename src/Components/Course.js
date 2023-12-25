import React from 'react'
import './course.css'
import { useNavigate } from 'react-router-dom'
function Course() {

  const nav = useNavigate()
  return (
    <div>


      <div className='col-12 mt-5'>


        <div>
          <div class="parent">
            <div className='col-sm-12 col-md-12 col-lg-12 p-5 child border border-secondary text-center'>
              <h3 className='text-warning  fw-bolder'><span className='text-secondary'>CLASS : </span> VI to VIII</h3>
              <h6 className='mt-4 fw-bold'>Our classes for VI to VIII focus on cultivating a strong foundation in key subjects. Engaging teaching methods and interactive sessions empower students to develop critical thinking skills, ensuring a seamless transition to higher grades.</h6>
              <button className='mt-4 btn btn-success text-light fw-bold' onClick={() => nav('/register')}>REGISTER :</button>
            </div>
          </div>


          <div class="parent">
            <div className='col-sm-12 col-md-12 col-lg-12 p-5 child border border-secondary text-center'>
              <h3 className='text-warning  fw-bolder '><span className='text-secondary'>CLASS : </span> IX and X</h3>
              <h6 className='mt-4 fw-bold'>Tailored for IX and X, our classes blend comprehensive syllabus coverage with targeted exam preparation. Our experienced educators employ strategic teaching approaches to enhance understandin</h6>
              <button className='mt-4 btn btn-success text-light fw-bold' onClick={() => nav('/register')}>REGISTER :</button>
            </div>
          </div>


          <div class="parent">
            <div className='col-sm-12 col-md-12 col-lg-12 p-5 child border border-secondary text-center'>
              <h3 className='text-warning  fw-bolder'><span className='text-secondary'>CLASS : </span> XI and XII</h3>
              <h6 className='mt-4 fw-bold'>Our classes for XI and XII prioritize in-depth subject knowledge and exam readiness. With a curriculum designed for competitive exams, students benefit from expert guidance, advanced study materials, and a supportive learning environment, ensuring a holistic approach to academic excellence.</h6>
              <button className='mt-4 btn btn-success text-light fw-bold' onClick={() => nav('/register')}>REGISTER :</button>
            </div>
          </div>



        </div>


      </div>



    </div>
  )
}

export default Course