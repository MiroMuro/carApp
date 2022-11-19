import React from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
function Editcar(props) {
  // Komponenttiin täytyy luoda modaalinen tila
  // Dialogi toimii ikkunana
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    year: "",
    price: "",
  });

  const handleClickOpen = () => {
    console.log(props.car);
    setCar({brand: props.car.brand,model: props.car.model, color: props.car.model,
            fuel: props.car.fuel, year: props.car.year, price: props.car.price})
    
    setOpen(true);
  };

  const handleClickClose = () => {
    console.log("HCC");
    setOpen(false);
  };
  const handleInputChange = (event) => {
    setCar({ ...car, [event?.target.name]: event?.target.value });
  };
  const editCar = () => {
    props.updateCar(car, props.car._links.self.href)
    handleClickClose();
  };
  return (
    <div>
      <Button onClick={handleClickOpen}>Edit car</Button>
      <Dialog onClose={handleClickClose} open={open}>
        <DialogTitle>Edit car</DialogTitle>
        <DialogContent id="DC">
          <DialogContentText>
            To add a new car, fill in the information about the car below
          </DialogContentText>
          <TextField
            autoFocus
            label="Brand"
            name="brand"
            value={car.brand}
            onChange={(e) => handleInputChange(e)}
            margin="dense"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Model"
            name="model"
            value={car.model}
            onChange={(e) => handleInputChange(e)}
            margin="dense"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Color"
            name="color"
            value={car.color}
            onChange={(e) => handleInputChange(e)}
            margin="dense"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Fuel"
            name="fuel"
            value={car.fuel}
            onChange={(e) => handleInputChange(e)}
            margin="dense"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="year"
            name="year"
            value={car.year}
            onChange={(e) => handleInputChange(e)}
            margin="dense"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Price"
            name="price"
            value={car.price}
            onChange={(e) => handleInputChange(e)}
            margin="dense"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Close</Button>
          <Button onClick={editCar}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Editcar;
