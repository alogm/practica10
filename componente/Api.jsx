import React, { useState, useEffect } from 'react';

function Api() {
  const [data, setData] = useState([]);

  const getData = async () => {
    
      const respuesta = await fetch("https://api.adviceslip.com/advice");
      const datos = await respuesta.json();

      setData({ id: datos.slip.id, advice: datos.slip.advice });
   
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div >
        <div className='contenedor'>
      <h6>ADVICE #{data.id}</h6>
      <p>"{data.advice}"</p>
      <br />
      <p><svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg></p>
      </div>
      <button onClick={getData}> <img
          src="data:image/svg+xml;charset=UTF-8,<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'><path d='M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z' fill='%23202733'/></svg>"
          alt="Siguiente"
        /></button>
    </div>
  );
}

export default Api;