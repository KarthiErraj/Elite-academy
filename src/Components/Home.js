import React, { useState } from 'react'
import './home.css'





function Home() {

  const [student, setstudent] = useState({
    Name: '',
    mobile: '',
    email: '',
    course: ''
  })

  const handleChange = (e) => {
    setstudent({ ...student, [e.target.name]: e.target.value });
    // console.log(e)
  };

  const onsubmit = () => {
    setstudent({
      Name: '',
      mobile: '',
      email: '',
      // course: ''
    })
  }
  console.log(student)
  return (
    <div>

      <div className='row cont1' >
        <div className='col-sm-12 col-md-6 col-lg-8 col-xl-8 p-4 about mb-5'>
          <h3 className='fw-bolder text-center bg-dark text-light'>About us:</h3>

          <p className='mt-3'>
            <h5 className='fw-bold'>Inclusive Academic Curriculum:</h5>
            <p>Our tuition center offers a comprehensive academic curriculum catering to students from VI to XII. Our expert faculty is dedicated to providing quality education, covering subjects such as Mathematics, Science, English, Social Studies, and more. The curriculum is designed to align with school syllabi, ensuring that students receive supplementary support for their regular studies. Our classes are structured to enhance understanding, foster critical thinking, and boost academic performance.</p>
          </p>
          <br />
          <h5 className='fw-bold'> Experienced and Specialized Faculty:</h5>
          <p>Under the guidance of experienced and specialized educators, students benefit from a personalized learning experience. Our faculty members are well-versed in the specific requirements of each grade level, tailoring their teaching methods to meet the diverse learning needs of students from the early years of secondary school through to their final years. This approach helps students build a strong foundation, grasp advanced concepts, and excel in their academic pursuits. Our teachers are committed to nurturing a positive learning environment that encourages curiosity and academic growth.</p>
          <br /> <h5 className='fw-bold'> Flexible Online Class Facility:</h5>
          <p>Recognizing the importance of flexibility in education, our tuition center provides online classes for students from VI to XII. With state-of-the-art technology, students can attend classes from the comfort of their homes, ensuring accessibility and convenience. Online classes maintain the same high standards as in-person sessions, with interactive features that facilitate student-teacher engagement. This flexibility not only accommodates diverse schedules but also enables students to access resources and support beyond regular class hours. Whether in-person or online, our tuition center strives to make quality education accessible to students at every level.
            In conclusion, our tuition center offers a comprehensive academic curriculum, experienced faculty, and a flexible online class facility to cater to the educational needs of students from VI to XII. We are dedicated to fostering academic excellence and providing a supportive learning environment for students at every stage of their secondary education.</p>


        </div>

        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4  contact  ' >


          <div className='studentdetials col-sm-12 col-md-10 col-lg-10   border border-dark p-2   cont-1  ' >
            <h3 className=''>Contact us :</h3>
            <div>
              <label className='form-label'>Name :</label>
              <input type='text' className='form-control border border-dark'
                name='Name'
                value={student.Name}
                onChange={(e) => handleChange(e)}>
              </input>
            </div>

            <div>
              <label className='form-label'>Mobile no: :</label>
              <input type='text' className='form-control border border-dark'
                name='mobile'
                value={student.mobile}
                onChange={(e) => handleChange(e)}></input>
            </div>
            <div>
              <label className='form-label'>E-mail :</label>
              <input type='text' className='form-control border border-dark'
                name='email'
                value={student.email}
                onChange={(e) => handleChange(e)}></input>
            </div>
            {/* <div>
              <label className='form-label'>Course :</label>
              <input type='dropdown' className='form-control border border-dark'
                name='course'
                value={student.course}
                onChange={(e) => handleChange(e)}>
              </input>
            </div> */}
            <div className='mt-5 text-center'><button className='btn  btn-primary fw-bold' onClick={() => onsubmit()}>Submit</button></div>
          </div>
          
        </div>


      </div>


    </div>
  )
}

export default Home