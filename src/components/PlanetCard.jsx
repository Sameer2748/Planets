import  { useState, useEffect } from "react";
import axios from "axios";

function PlanetCard({residentUrl}) {
  const [resident, setResident] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(resident);


  useEffect(() => {
    const fetchResident = async () => {
      try {
        const response = await axios.get(residentUrl);
        setResident(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resident data:", error);
        setLoading(false);
      }
    };

    fetchResident();
  }, [residentUrl]);

  if (loading) {
    return <p>Loading resident...</p>;
  }

  return (
    <>
      <div className="border col-span-6 md:col-span-3 lg:col-span-2 border-gray-300 rounded p-2">
        <p className="font-bold">Name: {resident.name}</p>
        <p>Gender: {resident.gender}</p>
        <p>Mass: {resident.mass}</p>
        <p>Height: {resident.height} m</p>
      </div>
    </>
  );
}

export default PlanetCard;
