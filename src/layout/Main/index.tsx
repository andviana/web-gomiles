import React from 'react';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import TopBar from './Components/TopBar';

const Main: React.FC = ({ children }) => {
  return (
    <div id='wrapper'>
      {/* Sidebar */}
      <Sidebar />
      {/* Content Wrapper */}
      <div id='content-wrapper' className='d-flex flex-column'>
        {/* Main Content */}
        <div id='content'>
          {/* Topbar */}
          <TopBar />
          {/* Begin Page Content */}
          <div className='container-fluid'>
            {children}
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
export default Main;
