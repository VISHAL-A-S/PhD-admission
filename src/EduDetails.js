import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import './edudetails.css';
import { FaGraduationCap } from 'react-icons/fa';


function cont_num(){
  return <error>Must contain numbers</error>
}
const BasicDetails = () => {
   const validate = Yup.object({  
    ten: Yup.string()
    .matches(/(^[0-9]*\.[0-9]*$)|(^[0-9]*$)/,cont_num)
    .required(<error>Required</error>),
    twelve: Yup.string()
    .matches(/(^[0-9]*\.[0-9]*$)|(^[0-9]*$)/,cont_num)
      .required(<error>Required</error>),
      clg: Yup.string()
      .matches(/(^[0-9]*\.[0-9]*$)|(^[0-9]*$)/,cont_num)
      .required(<error>Required</error>),
      tendoc: Yup.string().required(<error>Required</error>),
      twelvedoc: Yup.string().required(<error>Required</error>),
      clgdoc: Yup.string().required(<error>Required</error>),
    })
    const Dropdown = ({ label, value, options, onChange }) => {
      return (
        
        <label>
          {label}
          <select value={value} onChange={onChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      );
    };
    
  
    
  return (
  <div style={{textAlign: 'center'}}>
    <Formik
      initialValues={{
        firstName: '',
        Mobile: '',
        email: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
      
      
      <div >
        <div className="outer" id="Header">
          <h1 className="eduDetails"><br/>Educational Details<br/><br/></h1>
          </div>
          <div>
          <div className="background" id ="content">
          <br/>

          <Form className="form" >
            <TextField label="10th Mark(in %)" name="ten" type="text" placeholder="10th Mark..." className="input"/>
            <TextField label="Link for 10th MarkSheet" name="tendoc" type="text" placeholder="10th MarkSheet..." className="input"/>
            <TextField label="12th Mark(in %)" name="twelve" type="text"  placeholder="12th Mark..."className="input"/>
            <TextField label="Link for 12th MarkSheet" name="twelvedoc" type="text"  placeholder="12th MarkSheet..."className="input"/>
            <TextField label="UG Degree Mark(in %)" name="clg" type="text"  placeholder="UG Degree Mark..." className="input"/>
            <TextField label="Link for UG MarkSheet" name="clgdoc" type="text"  placeholder="UG Degree MarkSheet..." className="input"/>
            <label className="label">Bachelor's Degree<span style={{color:'red'}} className='label'>*</span></label>
            
            <div align="left">
            <FaGraduationCap size={40} style={{
            position: 'relative',
            left: 0,
            right: 0,
            top: 14,
            bottom: 0
         }}/>
            
      <select name="GradDegree" id="GradDegree" style={{fontSize:"28px", color:"#250448", fontWeight:"bold"}}>
        <option value="cse">CSE</option>
        <option value="mech">Mech</option>
        <option value="it">IT</option>
        <option value="aero">Aero</option>
        <option value="civil">Civil</option>
        <option value="ece">ECE</option>
      </select></div>
      
      
            <br/>
            <button className="button" type="submit" >Submit</button>
            
          </Form>
        <br/><br/><br/><br/>
          </div>
          </div>
          </div>
      )}
    </Formik></div>
  )
}
export default BasicDetails