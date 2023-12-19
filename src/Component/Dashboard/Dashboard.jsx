/*import React from 'react';
import Header from './Header';
import Sidebar from './Sider';
import CommonParent from '../../CommonParent';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-200 font-roboto">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
       
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50">
          <CommonParent />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;*/

import React from 'react';

import Header from './Header';
import Sidebar from './Sider';

//import Card from '../Company/Card'
import CompanyList from '../Company/Company_list';
import CommonParent from '../../CommonParent';

const Dashboard = () => {

  return (
    <div className="flex h-screen bg-gray-200 font-roboto">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
      {/*<Header  />*/}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50">
        <CommonParent/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;