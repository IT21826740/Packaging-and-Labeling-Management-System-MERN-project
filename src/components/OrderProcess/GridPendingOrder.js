/*import React from 'react';
import { FaList } from 'react-icons/fa';
import "../../Styles/Grid.css";

const GridPendingOrder = ({ allCount, customizedCount, nonCustomizedCount }) => {
  return (
    <div className='main-cards'>
      <div className='card'>
        <div className='card-inner'>
          <h4>ALL ORDERS</h4>
          <FaList className='card-icon' />
        </div>
        <h1>{allCount}</h1>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <h4>CUSTOMIZED ORDERS</h4>
          <FaList className='card-icon' />
        </div>
        <h1>{customizedCount}</h1>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <h4>NON-CUSTOMIZED ORDERS</h4>
          <FaList className='card-icon' />
        </div>
        <h1>{nonCustomizedCount}</h1>
      </div>
    </div>
  );
}

export default GridPendingOrder;*/
// GridPendingOrder.js
/*import React from 'react';
import { FaList } from 'react-icons/fa';
import "../../Styles/Grid.css";

const GridPendingOrder = () => {

    
  const [allCount, setAllCount] = useState(0);
  const [customizedCount, setCustomizedCount] = useState(0);
  const [nonCustomizedCount, setNonCustomizedCount] = useState(0);

  useEffect(() => {
    const getOrders = () => {
      axios
        .get("http://localhost:5000/order/read")
        .then((res) => {
          const data = res.data;
         
          setAllCount(data.allCount);
          setCustomizedCount(data.customizedCount);
          setNonCustomizedCount(data.nonCustomizedCount);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    getOrders();
  }, []);


  return (
    <div className='main-cards'>
      <div className='card'>
        <div className='card-inner'>
          <h4>ALL ORDERS</h4>
          <FaList className='card-icon' />
        </div>
        <h1>{allCount}</h1>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <h4>CUSTOMIZED ORDERS</h4>
          <FaList className='card-icon' />
        </div>
        <h1>{customizedCount}</h1>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <h4>NON-CUSTOMIZED ORDERS</h4>
          <FaList className='card-icon' />
        </div>
        <h1>{nonCustomizedCount}</h1>
      </div>
    </div>
  );
}

export default GridPendingOrder;

*/