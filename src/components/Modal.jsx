import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "./Card.jsx";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 3,
  color: "black",
  width: { xs: "90%", sm: 400, md: 500 },
  maxHeight: "90vh",
  overflowY: "auto",
};

export default function BasicModal({ character }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        color="inherit"
        sx={{
          color: "white",
          "&:hover": {
            backgroundColor: "transparent",
            color: "white",
          },
          "&:focus": { outline: "none" },
          "&:focus-visible": { outline: "none" },
        }}
      >
        {" "}
        {character.name}{" "}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2 style={{ textAlign: "center" }}>{character.name}</h2>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 0,
            }}
          >
            <Box>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Type: {character.type?.trim() || "Not specified"}</p>
              <p>Gender: {character.gender}</p>
              <p>Origin: {character.origin.name}</p>
              <p>Location: {character.location.name}</p>
            </Box>
            <img
              src={character.image}
              alt={character.name}
              style={{
                width: "245px",
                paddingLeft: "3rem",
                alignSelf: { xs: "center", sm: "flex-start" },
              }}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
