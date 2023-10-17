import React,{useState} from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Ticket from './components/Ticket/ticket';
import income from './components/images/income.png';
import orders from './components/images/orders.png';
import wallet from './components/images/wallet.png';
import sales from './components/images/sales.png';
import TableComp from './components/Table/table';
import DoughnutChart from './components/Charts/piechart';
import OverviewChart from './components/Charts/barchart';

function App() {
  const data = [
    { label: "Old customers", value: 400 },
    { label: "new Customers", value: 100 },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="App">
    <div className={`hamburger ${isSidebarOpen?'open':''}`} onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Navbar isSidebarOpen={isSidebarOpen} />
        <div className='container'>
          <div className='search'>
          <div className="user-greeting">Hello User 👋 ,</div>
          <input type="text" placeholder="Search" />
          </div>
          <div className="tickets-container">
          <Ticket title="Earnings" value="$198k" percent="37.5% this month" imgSrc={income} bgColorClass="image-color-1" />
          <Ticket title="Orders" value="$2.4k" percent="2% this month" imgSrc={orders} bgColorClass="image-color-2" />
          <Ticket title="Balance" value="$2.4k" percent="2% this month" imgSrc={wallet} bgColorClass="image-color-3" />
          <Ticket title="Total Sales" value="$89k" percent="11% this month" imgSrc={sales} bgColorClass="image-color-4" />
        </div>
        <div className='charts'>
        <div id='barchart'>
          <OverviewChart></OverviewChart>
          </div>
        <div className="donut-con">
            <h4>Customers</h4>
            <p>Customers that buy products</p>
            <DoughnutChart data={data}/>
            <div id='percent'>65%</div>
          </div>
        </div>
        <div id='table'>
        <TableComp></TableComp>
        </div>
        </div>
    </div>
  );
}

export default App;
