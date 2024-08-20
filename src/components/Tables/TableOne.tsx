// import BrandOne from '../../images/brand/brand-01.svg';
// import BrandTwo from '../../images/brand/brand-02.svg';
// import BrandThree from '../../images/brand/brand-03.svg';
// import BrandFour from '../../images/brand/brand-04.svg';
// import BrandFive from '../../images/brand/brand-05.svg';
// import { BRAND } from '../../types/brand';
import { VpnUser } from '../../types/VpnUser';
// import SelectGroupTwo from '../../SelectGroup/SelectGroupTwo';

import  Accordian  from '../../components/Accordian';


const fakeVpnUsers: VpnUser[] = [
  {
    id: 101,
    username: 'john_doe',
    email: 'john.doe@example.com',
    connectionStatus: 'connected',
    ipAddress: '192.168.10.1',
    connectionDuration: '1h 15m',
    country: 'United States',
  },

  {
    id: 101,
    username: 'john_doe',
    email: 'john.doe@example.com',
    connectionStatus: 'connected',
    ipAddress: '192.168.10.1',
    connectionDuration: '1h 15m',
    country: 'United Kingdone',
  },
  

  {
    id: 101,
    username: 'john_doe',
    email: 'john.doe@example.com',
    connectionStatus: 'connected',
    ipAddress: '192.168.10.1',
    connectionDuration: '1h 15m',
    country: 'United Kingdone',
  },

  {
    id: 101,
    username: 'john_doe',
    email: 'john.doe@example.com',
    connectionStatus: 'connected',
    ipAddress: '192.168.10.1',
    connectionDuration: '1h 15m',
    country: 'United Kingdone',
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        VPN
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-8">
          
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Country Name 
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total Servers
            </h5>
          </div>
          <div className="p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Users
            </h5>
          </div>
          <div className="p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Lists
            </h5>
          </div>
          <div className="p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              View Lists
            </h5>
          </div>
          
          
        </div>

        {fakeVpnUsers.map((user, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-8 ${
              key === fakeVpnUsers.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
         
         <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-3 ">{user.country}</p>
            </div>


            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-3 ">NAN</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-3 ">NAN</p>
            </div>


            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-3 "><Accordian /></p>
            </div>


            

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
