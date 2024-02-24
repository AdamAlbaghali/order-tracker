# Order Tracker

Order Tracker is a web application designed to manage and track orders. It utilizes HTML, CSS, JavaScript, Node.js, Express.js, and Python with the Faker library for testing purposes.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)

## Features

- **Order Management**: Easily manage and track orders through a user-friendly interface.
- **Data Visualization**: Visualize order data using interactive charts and graphs.
- **User Authentication**: Securely authenticate users and manage access to order data.
- **Testing with Faker**: Generate fake data for testing purposes using the Faker library in Python.

## Installation

To install and run the Order Tracker application, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AdamAlbaghali/order-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd order-tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Usage

Once the application is running, you can perform the following actions:

- **Create Orders**: Add new orders to the system.
- **Track Orders**: View and track the status of existing orders.
- **Update Orders**: Modify order details such as status, quantity, etc.
- **Delete Orders**: Remove orders from the system.

## Testing

The Order Tracker application includes testing using the Faker library in Python. To run the tests, follow these steps:

1. Ensure Python is installed on your system.
2. Navigate to the `testing` directory:

   ```bash
   cd testing
   ```

3. Install the Faker library:

   ```bash
   pip install faker
   ```

4. Run the test script:

   ```bash
   python test_order_generation.py
   ```

   This script generates fake order data for testing purposes.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

