import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Select, MenuItem } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import img1 from '../images/images.jpg';
import img2 from '../images/download.jpg';
import './table.css'; 

const TableComp = () => {
  const products = [
    {
      productname: 'Abstract 3D',
      stock: 100,
      price: 29.99,
      totalsales: 3000,
      image: img2,
    },
    {
      productname: 'Sarphens illustration',
      stock: 75,
      price: 39.99,
      totalsales: 4500,
      image: img1,
    },
  ];

  return (
    <div className=" custom-datatable">
      <TableContainer component={Paper}>
        <div className="header">
          <span className="heading">Products Sell</span>
          <div className='float'>
          <div className='wholecontainer'>
            <div className="p-input-icon-left">
              <TextField placeholder="Search" className="input" size='small' />
            </div>
            <Select
              value="last30days"
              className="dropdown"
              IconComponent={ArrowDropDown}
            >
              <MenuItem value="last30days">Last 30 days</MenuItem>
              <MenuItem value="last60days">Last 60 days</MenuItem>
              <MenuItem value="last90days">Last 90 days</MenuItem>
            </Select>
          </div>
          </div>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.productname}>
                <TableCell>
                  <div className="product-image">
                    <img src={product.image} alt={product.productname} width="40" height="20" />
                    <span className="product-name">{product.productname}</span>
                  </div>
                </TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.totalsales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComp;
