import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import OrderIcon from '@mui/icons-material/ShoppingCart';
import ReturnIcon from '@mui/icons-material/AssignmentReturn';
import CustomerIcon from '@mui/icons-material/People';
import ShippingIcon from '@mui/icons-material/LocalShipping';
import ChannelIcon from '@mui/icons-material/Storefront';
import IntegrationIcon from '@mui/icons-material/IntegrationInstructions';
import CalculatorIcon from '@mui/icons-material/Calculate';
import ReportIcon from '@mui/icons-material/Assessment';
import AccountIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import './App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const lineData = {
    labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [1600, 800, 800],
        borderColor: 'orange',
        backgroundColor: 'orange',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Sales',
        data: [1404, 800, 450],
        borderColor: 'teal',
        backgroundColor: 'teal',
        fill: false,
        tension: 0.1,
      },

    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales vs Orders',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date Range'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Values'
        },
        beginAtZero: true,
      }
    },
  };


  const pieData = {

    datasets: [
      {
        data: [55.8, 44.2],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },

    ],
    labels: ['WooCommerce Store', 'Shopify Store']
  };
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      
    },
  };

  return (
    <div className="container">
      <div className="sidebar">
        <nav>
          <a href="#" className="active"><DashboardIcon /> Dashboard</a>
          <a href="#"><InventoryIcon /> Inventory</a>
          <a href="#"><OrderIcon /> Order</a>
          <a href="#"><ReturnIcon /> Returns</a>
          <a href="#"><CustomerIcon /> Customers</a>
          <a href="#"><ShippingIcon /> Shipping</a>
          <a href="#"><ChannelIcon /> Channel</a>
          <a href="#"><IntegrationIcon /> Integrations</a>
          <a href="#"><CalculatorIcon /> Calculators</a>
          <a href="#"><ReportIcon /> Reports</a>
          <a href="#"><AccountIcon /> Account</a>
        </nav>
      </div>
      <div className="main-content">
        <div className="chart-container">
          <h3>Sales vs Orders <InfoIcon /></h3>
          <Line data={lineData} options={lineOptions} />
        </div>
        <div className="pie-chart-container">
        <h3>Portion of Sales<InfoIcon /></h3>
        <Pie data={pieData} options={pieOptions} width={200} height={200}/>
        <div className="custom-legend">
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#FF6384' }}></span>
            WooCommerce Store
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#36A2EB' }}></span>
            Shopify Store
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;
