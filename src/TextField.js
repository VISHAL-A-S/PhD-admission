import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './edudetails.css';
import { RiAccountCircleFill } from 'react-icons/ri';
import { FaMobileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GrScorecard } from 'react-icons/gr';
import { HiLink } from 'react-icons/hi';
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="textfield">
      
      <label htmlFor={field.name} styel={{color: '#250448'}}>{label}
      

<span style={{color:'red'}} className='label'>*</span></label>
<div style={{align:'center'}}>
      {(() => {
        switch (field.name) {
          case "Name":   return <RiAccountCircleFill size={40}  style={{
            position: 'relative',
            left: 0,
            right: 0,
            top: 14,
            bottom: 0
         }}/>;
         case "ten":   return <GrScorecard size={40}  style={{
          position: 'relative',
          left: 0,
          right: 0,
          top: 14,
          bottom: 0
       }}/>;
       case "twelve":   return <GrScorecard size={40}  style={{
        position: 'relative',
        left: 0,
        right: 0,
        top: 14,
        bottom: 0
     }}/>;
     case "clg":   return <GrScorecard size={40}  style={{
      position: 'relative',
      left: 0,
      right: 0,
      top: 14,
      bottom: 0
   }}/>;
   case "tendoc":   return <HiLink size={40}  style={{
    position: 'relative',
    left: 0,
    right: 0,
    top: 14,
    bottom: 0
 }}/>;
 case "twelvedoc":   return <HiLink size={40}  style={{
  position: 'relative',
  left: 0,
  right: 0,
  top: 14,
  bottom: 0
}}/>;
case "clgdoc":   return <HiLink size={40}  style={{
  position: 'relative',
  left: 0,
  right: 0,
  top: 14,
  bottom: 0
}}/>;
          case "Mobile": return <FaMobileAlt size={40}  style={{
            position: 'relative',
            left: 0,
            right: 0,
            top: 14,
            bottom: 0
         }}/>;
          case "email":  return <MdEmail size={40}  style={{
            position: 'relative',
            left: 0,
            right: 0,
            top: 14,
            bottom: 0
         }}/>;
          default:      return "";
        }
      })()}
    
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} 
        {...field} {...props}
        autoComplete="off"
        
      />
      
      </div>
      <ErrorMessage component="div" name={field.name} className="error" />
      <br/><br/><br/><br/>
    </div>
  )
}