import React from "react";
import AdminNav from './AdminNav';
import useAnimatedNumber from "./useAnimatedNumber"; // Import the hook

const AdminDashboard = () => {
  const totalProducts = useAnimatedNumber(150);
  const todayCollection = useAnimatedNumber(5000);
  const thisWeek = useAnimatedNumber(30000);
  const currentMonth = useAnimatedNumber(120000);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <AdminNav />
      </div>
      <div className="p-4 space-y-4 mt-20">
        <h1 className="text-yellow-800">Admin Dashboard</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Total Products */}
          <div className="p-2 shadow border-l">
            <div className="flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                </svg>
              </span>
              <h2 className="text-sm">Total Products</h2>
            </div>
            <p className="text-[16px] mt-3 text-center">{totalProducts}</p>
          </div>

          {/* Today's Collection */}
          <div className="p-2 shadow border-l">
            <div className="flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <h2 className="text-sm">Today's Total</h2>
            </div>
            <p className="text-[16px] mt-3 text-center">₹{todayCollection}</p>
          </div>

          {/* This Week */}
          <div className="p-2 shadow border-l">
            <div className="flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <h2 className="text-sm">This Week</h2>
            </div>
            <p className="text-[16px] mt-3 text-center">₹{thisWeek}</p>
          </div>

          {/* Current Month */}
          <div className="p-2 shadow border-l">
            <div className="flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <h2 className="text-sm">Current Month</h2>
            </div>
            <p className="text-[16px] mt-3 text-center">₹{currentMonth}</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
