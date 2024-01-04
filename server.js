const express = require('express');
const app = express();
const port = 3000;

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
  
    // Check if the order exists in the dataframe
    const orderIndex = df.findIndex((item) => item['Order Numbers'] === parseInt(orderNumber) && item['Emails'] === email);
  
    console.log('Order index:', orderIndex);
  
    if (orderIndex === -1) {
      console.log('Invalid order number or email. Order not found.');
      res.send('Invalid order number or email. Please try again.');
      return;
    }
  
    const orderStatus = df[orderIndex]['Status'];
  
    console.log('Order status before update:', orderStatus);
  
    switch (orderStatus) {
      case 'Design team working on proofs':
        df[orderIndex]['Status'] = 'Garments ordered from wholesaler';
        break;
      case 'Garments ordered from wholesaler':
        df[orderIndex]['Status'] = 'Job being printed';
        break;
      case 'Job being printed':
        df[orderIndex]['Status'] = 'Order shipped';
        break;
    }
  
    console.log('Updated order status:', df[orderIndex]['Status']);
  
    res.redirect(`/next?order_status=${orderStatus}`);
  });
  

app.get('/next', (req, res) => {
  const orderStatus = req.query.order_status;
  res.sendFile(__dirname + '/next.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
