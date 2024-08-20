import React, { useEffect, useState } from 'react';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import TableOne from '../../components/Tables/TableOne';
import axios from 'axios';
interface Server {
  url: string;
  alias: string;
}

interface ServerData {
  alias: string;
  data: any;
}

const ECommerce: React.FC = () => {
  const servers: Server[] = [
    {
      url: 'http://109.199.107.235:5000/api/v1/connected_clients',
      alias: 'Germany Storage',
    },
    {
      url: 'http://167.71.20.24:5000/api/v1/connected_clients',
      alias: 'New York Digital Ocean',
    },
    {
      url: 'http://154.26.130.37:5000/api/v1/connected_clients',
      alias: 'Singapore',
    },
    {
      url: 'http://154.26.157.165:5000/api/v1/connected_clients',
      alias: 'Australia Sydney',
    },
    {
      url: 'http://149.102.159.114:5000/api/v1/connected_clients',
      alias: 'UK London',
    },
    {
      url: 'http://38.242.196.162:5000/api/v1/connected_clients',
      alias: 'Eu Dusseldorf',
    },
    {
      url: 'http://185.192.96.178:5000/api/v1/connected_clients',
      alias: 'Germany VPN Config',
    },
    {
      url: 'http://66.94.119.90:5001/api/v1/connected_clients',
      alias: 'US Contabo',
    },
    {
      url: 'http://45.136.196.70:5000/api/v1/connected_clients',
      alias: 'ishosting Spain',
    },
    {
      url: 'http://38.180.35.142:5000/api/v1/connected_clients',
      alias: 'ishosting Romania',
    },
    {
      url: 'http://38.180.12.228:5000/api/v1/connected_clients',
      alias: 'ishosting Canada',
    },
    {
      url: 'http://37.1.217.132:5000/api/v1/connected_clients',
      alias: 'ishosting Netherland',
    },
    {
      url: 'http://38.180.161.127:5000/api/v1/connected_clients',
      alias: 'ishosting Switzerland',
    },
  ];

  const auth_token = 'qQFmpIHRUVEYf9BSHvmbv7PAgOsfcsoT';
  const [data, setData] = useState<ServerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null | unknown>(null);
  const fetchData = async () => {
    try {
      const result = await axios.get(
        'http://38.180.161.127:5000/api/v1/connected_clients',
        {
          headers: { Authorization: `qQFmpIHRUVEYf9BSHvmbv7PAgOsfcsoT` },
        },
      );

      console.log('result from server===>', result);

      setData(result.data);
    } catch (err) {
      setError(err);
      console.log('err===>', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // console.log('data>>>', data);
  return (
    <>
      <div className="mt-4 grid grid-cols-12  gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartTwo />
        <ChartThree />
        <div className="col-span-12 xl:col-span-12">
          <TableOne />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
