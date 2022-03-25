import React from 'react'
import './App.css'
import EduDetails from './EduDetails'
import './edudetails.css'
import UserActivity from './UserActivity'

class App extends React.Component {
  render() {
    return (
      <div>
         <EduDetails/> 
         {/* <UserActivity/>  */}
      </div>
    );
  }
}
export default App;
