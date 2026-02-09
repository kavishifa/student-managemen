import React from 'react';
import './App.css';
import Sidebar from './Sidebar'; // Capital 'S' check pannunga

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="stats-row">
          <div className="card-red"><p>Regd users</p><h1>8</h1></div>
          <div className="card-red"><p>Subject Listed</p><h1>8</h1></div>
        </div>
        <button style={{background:'blue', color:'white', padding:'8px 15px', border:'none', marginBottom:'20px', cursor:'pointer'}}>
          Add student
        </button>
        
        <h2>Hello Mohan</h2>
        <div className="profile-box">
          <div className="profile-left">
            <p><strong>Account details</strong></p><br/>
            <p>👤 kemira sejal</p>
            <p>📅 1.12.2001</p>
            <p>📞 +91 997 744 5566</p>
            <p>📧 kemirasejal@gmail.com</p>
          </div>
          <div className="profile-right">
            <h3>Edit</h3>
            <div className="input-group">
              <label>Username</label>
              <input type="text" defaultValue="annabeck99" />
            </div>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" defaultValue="Anna Becker" />
            </div>
            <button className="update-btn">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
