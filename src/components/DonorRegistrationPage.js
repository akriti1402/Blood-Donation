
import React from "react";
import DonorForm from "./DonorForm"; 

const DonorRegistrationPage = () => {
  console.log("DonorRegistrationPage rendered");
  const handleDonorRegistration = async (donorData) => {
    try {
    
      const response = await fetch("http://localhost:3000/donor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donorData),
      });

      if (response.ok) {
        console.log("Donor registered successfully");
        
      } else {
        console.error("Failed to register donor");
      }
    } catch (error) {
      console.error("Error during donor registration:", error.message);
    }
  };

  return (
    <div>
      <h1>Donor Registration</h1>
      <DonorForm onSubmit={handleDonorRegistration} />
    </div>
  );
};

export default DonorRegistrationPage;
