/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PlanetCard from "./PlanetCard.jsx";

const Modal = ({ planet, closeModal }) => {
  return (
    <div className="fixed inset-0 z-10 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-80 p-8 rounded-lg shadow-xl" style={{ width: '80%' }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{planet.name}</h2>
          <button onClick={closeModal}>&times;</button>
        </div>
        <div className="text-gray-700 flex flex-col gap-2">
          <p><div className="flex items-center gap-2"><img width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/4643/4643191.png" alt="" /> Climate: {planet.climate} </div></p>
          <p> <div className="flex items-center gap-2">
                  <img className="rounded-full" width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/9098/9098587.png" alt="" />
                Terrain: {planet.terrain}
                </div></p>
          <p><div className="flex items-center gap-2">
                  <img className="rounded-full" width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/2994/2994337.png" alt="" />
                  Population: {planet.population}
                </div></p>
          <h3 className="mt-4 mb-2 font-semibold">Residents:</h3>
          {/* get all residents */}
          <div className="grid grid-cols-6 gap-4">
            {planet.residents.map((residentUrl) => (
                <>
                <PlanetCard key={residentUrl} residentUrl={residentUrl} />
                </>
            ))}
            
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={closeModal}
            className="text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
