import React from 'react';
import officeImage from './assets/office-placeholder.png'; // local image

function App() {
  // Create an object of office to display Name, Rent, Address
  const office = {
    name: "Prime Office Space",
    rent: 55000,
    address: "MG Road, Bengaluru"
  };

  // List of office space items
  const officeList = [
    { name: "Tech Hub", rent: 45000, address: "HSR Layout" },
    { name: "Startup Nest", rent: 70000, address: "Indiranagar" },
    { name: "Eco Work", rent: 60000, address: "Koramangala" },
    { name: "Urban Desk", rent: 80000, address: "Whitefield" }
  ];

  return (
    <div>
      {/* Heading of the page */}
      <h1>Office Space Rental App</h1>

      {/* Attribute to display image */}
      <img
        src={officeImage}
        alt="Office"
        width="300"
        height="150"
      />

      {/* Display office object */}
      <h2>{office.name}</h2>
      <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
        Rent: ₹{office.rent}
      </p>
      <p>Address: {office.address}</p>

      <hr />

      {/* Loop through the list of office space items */}
      <h2>Other Office Spaces</h2>
      {officeList.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
            Rent: ₹{item.rent}
          </p>
          <p>Address: {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
