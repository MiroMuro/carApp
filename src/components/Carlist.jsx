import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Addcar from "./Addcar";
import EditCar from "./EditCar"
function Carlist() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
    console.log(cars);
  }, []);

  const fetchCars = () => {
    fetch("https://carstockrest.herokuapp.com/cars")
      .then((response) => response.json())
      .then((data) => setCars(data._embedded.cars));
  };

  const deleteCars = (link) => {
    fetch(link, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        fetchCars();
        console.log("lol");
      }
    });
  };
  const saveCar = (car) => {
    fetch("https://carstockrest.herokuapp.com/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then((response) => fetchCars())
      .catch((err) => console.error(err));
  };
  const editCar = (car, link) =>{
    fetch(link,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then((response => fetchCars()))
      .catch((error) => console.error)
  }
  const [columnDefs, setColumnDefs] = useState([
    { field: "brand", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    { field: "color", sortable: true, filter: true },
    { field: "fuel", sortable: true, filter: true },
    { field: "year", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
    {
      width: 100,
      cellRenderer: (params) =>(
        <EditCar updateCar={editCar} car={params.data}/>
      )
    },
    { 
      headerName: "",
      width: 100,
      field: "_links.self.href",
      cellRenderer: (params) => (
        <IconButton color="error" onClick={() => deleteCars(params.value)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ]);
  return (
    <div>
      <Addcar saveCar={saveCar} />
      <div style={{ margin: "auto", height: "100%", boxSizing: "border-box" }}>
        <div
          style={{ margin: "auto", height: 600, width: "90%" }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            rowData={cars}
            columnDefs={columnDefs}
            paginationPageSize={10}
            pagination={true}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
}

export default Carlist;
