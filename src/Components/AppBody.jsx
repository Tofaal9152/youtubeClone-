<<<<<<< HEAD
import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main';
import { Outlet } from 'react-router-dom';

const AppBody = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[15%]">
          <Sidebar />
        </div>
        <div className="w-[85%]  mt-[3.5rem] ml-[1.5rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

=======
import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main';
import { Outlet } from 'react-router-dom';

const AppBody = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[15%]">
          <Sidebar />
        </div>
        <div className="w-[85%]  mt-[3.5rem] ml-[1.5rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

>>>>>>> 5f6faf0b8ac37757cb7db8f45c76cc1117f77b32
export default AppBody