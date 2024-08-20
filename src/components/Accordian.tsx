import React, { useState } from 'react';
import '../css/Accordian.css';

const Accordion = () => {
  const accordionData = {
    title: 'View List',
    content: (
      <div className="accordion-content rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="flex flex-col">
          <div className="grid grid-cols-5 gap-4 rounded-sm bg-gray-200 dark:bg-meta-4 sm:grid-cols-5">

            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase sm:text-base">Country</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase sm:text-base">UID</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase sm:text-base">City</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase sm:text-base">IP Address</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase sm:text-base">Bytes In</h5>
            </div>

          </div>
          
          {/* Data Row */}
          <div className="grid grid-cols-5 gap-4 mt-4">
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-meta-3 text-lg">UK</p>
            </div>

            <div className="p-2.5 text-center xl:p-5">
              <p className="text-meta-3 text-lg">12</p>
            </div>

            <div className="p-2.5 text-center xl:p-5">
                <p className="text-meta-3 text-lg">UK</p>
            </div>

            <div className="p-2.5 text-center xl:p-5">
                <p className="text-meta-3 text-lg">192.168.11.0</p>
            </div>

            <div className="p-2.5 text-center xl:p-5">
                <p className="text-meta-3 text-lg">1000</p>
            </div>


            
            
          </div>
        </div>
      </div>
    ),
  };

  const { title, content } = accordionData;
  const [isActive, setIsActive] = useState(false);

//   const handleClick = () => (

//   )

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title flex justify-between items-center cursor-pointer" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && content}
      </div>
    </div>
  );
};

export default Accordion;
