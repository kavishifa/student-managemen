import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 style={{ color: 'blue', marginBottom: '30px' }}>ADMIN</h2>
      <p style={{fontSize: '11px', color: '#999'}}>DASH</p>
      <div className="menu-item">Dashboard</div>
      <p style={{fontSize: '11px', color: '#999', marginTop: '20px'}}>APPEARANCE</p>
      <div className="menu-item">Student Classes</div>
      <div className="menu-item">Subjects</div>
      <div className="menu-item active-menu">students</div>
      <div className="menu-item">Result</div>
      <div className="menu-item">Admin Change Password</div>
    </div>
  );
};

export default Sidebar;
