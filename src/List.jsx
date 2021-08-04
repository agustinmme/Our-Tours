import React, { useState } from "react";
import Tour from "./Tour"
function List({lista,remove}) {
  return (
    <>
      {lista.map((tour) => (
        <Tour id={tour.id} key={tour.id} img={tour.image}  name={tour.name} price={tour.price} info={tour.info} remove={remove}/>
      ))}
    </>
  );
}

export default List;
