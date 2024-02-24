import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination.jsx";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import Modal from "./Modal.jsx";

const Feed = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const [openModals, setOpenModals] = useState(Array(planets.length).fill(false));
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  

  useEffect(() => {
    fetchData(`https://swapi.dev/api/planets/?page=${currentPage}`);
  }, [currentPage]);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setPlanets(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10)); // Assuming 10 planets per page
    } catch (error) {
      console.error("Error fetching data:", error);
    }finally {
      setLoading(false);
    }
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = (planetIndex) => {
    setSelectedPlanet(planetIndex);
    setOpenModals(prevState => {
      const updatedState = [...prevState];
      updatedState[planetIndex] = true;
      return updatedState;
    });
  };

  const closeModal = () => {
    setSelectedPlanet(null);
    setOpenModals(prevState => {
      const updatedState = [...prevState];
      updatedState[selectedPlanet] = false;
      return updatedState;
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-5xl text-grat-700 font-bold"><a href="/">Planet Directory</a></h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {planets.map((planet, index) => (
          <Card key={planet.name} className="mt-6 w-auto flex gap-2 shadow-lg">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {planet.name}
              </Typography>
              <Typography> <div className="flex items-center gap-2"><img width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/4643/4643191.png" alt="" /> Climate: {planet.climate} </div></Typography>
              <Typography>
                <div className="flex items-center gap-2">
                  <img className="rounded-full" width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/9098/9098587.png" alt="" />
                Terrain: {planet.terrain}
                </div></Typography>
              <Typography><div className="flex items-center gap-2">
                  <img className="rounded-full" width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/2994/2994337.png" alt="" />
                  Population: {planet.population}
                </div></Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button onClick={() => openModal(index)}>Open Modal</Button>
              {openModals[index] && <Modal planet={planet} closeModal={closeModal} />}
            </CardFooter>
          </Card>
        ))}
      </div>
      {loading && 
      (
        <div className="flex w-full h-10 flex justify-center items-center m-2 bg-gray-600">
          <p className="text-white text-3xl">Loading...</p>
        </div>
      )
      }
      <Pagination className="sticky bottom-0" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}
      />
    </div>
  );
};

export default Feed;
