import React from "react";

export default function CustomerData() {
    const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
    .then((response) => response.json()) 
    .then((jsonData) => setUser(jsonData)) 
    .catch((error) => console.log(error)); 
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name:{user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt="profile"/>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}