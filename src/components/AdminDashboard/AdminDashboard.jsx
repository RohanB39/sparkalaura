import React, { useState } from 'react';
import AdminNav from './AdminNav';


const AdminDashboard = () => {
  

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
          <AdminNav />
        </div>
    </>
  );
};

export default AdminDashboard;