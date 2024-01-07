const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const fs = require('fs');
const xlsx = require('xlsx');
const secrets = require('crypto').randomBytes(16).toString('hex');

app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true }));

const excelFilePath = 'Tester internship project.xlsx';
const workbook = xlsx.readFile(excelFilePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
let df = xlsx.utils.sheet_to_json(worksheet);

if (!df[0].hasOwnProperty('Status')) {
  df = df.map((item) => ({ ...item, Status: 'Design team working on proofs' }));
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/front.html');
});

app.post('/', (req, res) => {
    const { orderNumber, email } = req.body;
  
    console.log('Received POST request with orderNumber:', orderNumber, 'and email:', email);
  
    if (!orderNumber || !email) {
      res.send('Please provide both order number and email.');
      return;
    }
  
    const orderIndex = df.findIndex((item) => item['Order Numbers'] == parseInt(orderNumber) && item['Emails'] === email);
  
    console.log('Order index:', orderIndex);
  
    if (orderIndex === -1) {
      console.log('Invalid order number or email. Order not found.');
      res.send('Invalid order number or email. Please try again.');
      return;
    }
  
    const currentOrderStatus = df[orderIndex]['Status'];
  
    console.log('Current order status:', currentOrderStatus);
  
    let nextOrderStatus;
  
    switch (currentOrderStatus) {
      case 'Design team working on proofs':
        nextOrderStatus = 'Garments ordered from wholesaler';
        break;
      case 'Garments ordered from wholesaler':
        nextOrderStatus = 'Job being printed';
        break;
      case 'Job being printed':
        nextOrderStatus = 'Order shipped';
        break;
      default:
        nextOrderStatus = 'Unknown order status.';
        break;
    }
  
    console.log('Next order status:', nextOrderStatus);
  
    res.redirect(`/next?currentOrderStatus=${currentOrderStatus}&nextOrderStatus=${nextOrderStatus}`);
  });
  
  app.get('/next', (req, res) => {
    const currentOrderStatus = req.query.currentOrderStatus;
    const nextOrderStatus = req.query.nextOrderStatus;
  
    if (!currentOrderStatus || !nextOrderStatus) {
      return res.send('Invalid request. Please provide both current and next order statuses.');
    }
  
    res.sendFile(path.join(__dirname, 'next.html'));
  });
  

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
