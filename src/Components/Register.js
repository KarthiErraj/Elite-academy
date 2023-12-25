import React, {  useState } from 'react'
import './register.css'

function Register() {

  const [details, setdetails] = useState({
    name: "",
    mobile: "",
    email: "",
    class: "",
    mode: "",
    address: "",
    state: "",
  })

  const getdata = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  }

  const onsubmit = () => {
    setdetails({
      name: "",
      mobile: "",
      email: "",
      class: "",
      mode: "",
      address: "",
      state: "",
    })
  }


  console.log(details)
  return (
    <div>

      <div className='container mt-5 '>

        <div className='container-fluid bg-secondary p-4 top mb-2'>


<div className='row'>
  
<div className='col-sm-12 col-md-6 col-lg-6  col-xl-6   my-2'>
            <label className='form-label fw-bold'>Student Name :</label>
            <input type='text' maxLength={25} className='form-control border border-dark'
              name='name'
              value={details.name}
              onChange={(e) => getdata(e)} >


            </input>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-6  col-xl-6   my-2'>
            <label className='form-label fw-bold'>Mobile no :</label>
            <input type='number' maxLength={10} className='form-control border border-dark'
              name='mobile'
              value={details.mobile}
              onChange={(e) => getdata(e)} >

            </input>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-6  col-xl-6 my-2'>
            <label className='form-label fw-bold '>E-mail :</label>
            <input type='text' className='form-control border border-dark'
              name='email'
              value={details.email}
              onChange={(e) => getdata(e)} >

            </input>
          </div>


          <div class="col-sm-12 col-md-6 col-lg-6  col-xl-6 my-2">
            <label for="inputState" class="form-label fw-bold ">Class :</label>
            <select id="inputState" class="form-select border border-dark"
              name='class'
              value={details.class}
              onChange={(e) => getdata(e)}  >

              <option selected>Select</option>
              <option value="VI TO VIII">VI TO VIII</option>
              <option value="IX and X">IX and X</option>
              <option value="XI and XII">XI and XII</option>
            </select>
          </div>

          <div class="form-check fw-bold my-2">
            <input
              class="form-check-input"
              type="radio"
              name="mode"
              value="Online"
              checked={details.mode === "Online"}
              onChange={(e) => getdata(e)}
            />
            <label class="form-check-label fw-bold" for="mode">
              Online
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="mode"
              value="Offline"
              checked={details.mode === "Offline"}
              onChange={(e) => getdata(e)}
            />
            <label class="form-check-label fw-bold" for="flexRadioDefault2">
              Offline
            </label>
          </div>


          <div class="col-sm-12 col-md-6 col-lg-6  col-xl-6 my-2">
            <label for="inputAddress" class="form-label fw-bold ">Address :</label>
            <input type="text" class="form-control border border-dark" id="inputAddress" placeholder="Address"
              name='address'
              value={details.address}
              onChange={(e) => getdata(e)} />

          </div>




          <div class="col-sm-12 col-md-6 col-lg-6  col-xl-6 my-2">
            <label for="inputState" class="form-label fw-bold">State :</label>
            <select id="inputState" class="form-select border border-dark"
              name='state'
              value={details.state}
              onChange={(e) => getdata(e)} >
              <option selected>Select</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Delhi">Delhi</option>
              <option value="Puducherry">Puducherry</option>
            </select>


          </div>
          {/* <button className='btn btn-primary text-light fw-bold  mt-5  justify-content-end' onClick={() => { onsubmit() }}>REGISTER :</button> */}
         
          <div className='d-flex justify-content-end'>
                <button
                  className='btn btn-primary text-light fw-bold mt-5 narrow-button'
                  style={{ width: '120px' }} // Adjust the width as needed
                  onClick={()=>{onsubmit()}  }              >
                  REGISTER
                </button>
              </div>
</div>






        </div>



      </div>



    </div>
  )
}

export default Register
