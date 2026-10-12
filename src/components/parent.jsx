import React from 'react'
import Child from "./child";
import "./app.css";

const parent = () => {  
    const users =
    [
        {
            name:"santhosh",
            age:"23",
            city:"sivaganga",
            email:"santhoshsareo2003@gmail.com",
            mob:"7094689956"
        },
         {
      name: "Arun",
      city: "Chennai",
      age: 24,
      email: "arun@gmail.com",
      phone: "9876543211"
    },
    {
      name: "Rahul",
      city: "Madurai",
      age: 22,
      email: "rahul@gmail.com",
      phone: "9876543212"
    },
    {
      name: "Karthik",
      city: "Trichy",
      age: 25,
      email: "karthik@gmail.com",
      phone: "9876543213"
    },
    {
      name: "Vijay",
      city: "Salem",
      age: 23,
      email: "vijay@gmail.com",
      phone: "9876543214"
    }
    ];
 return (
  <div className="container">

    <h1>User Details</h1>

    <div className="user-container">

      <Child
        name={users[0].name}
        city={users[0].city}
        age={users[0].age}
        email={users[0].email}
        phone={users[0].phone}
      />

      <Child
        name={users[1].name}
        city={users[1].city}
        age={users[1].age}
        email={users[1].email}
        phone={users[1].phone}
      />

      <Child
        name={users[2].name}
        city={users[2].city}
        age={users[2].age}
        email={users[2].email}
        phone={users[2].phone}
      />

      <Child
        name={users[3].name}
        city={users[3].city}
        age={users[3].age}
        email={users[3].email}
        phone={users[3].phone}
      />

      <Child
        name={users[4].name}
        city={users[4].city}
        age={users[4].age}
        email={users[4].email}
        phone={users[4].phone}
      />

    </div>
  </div>
);
};

export default parent;