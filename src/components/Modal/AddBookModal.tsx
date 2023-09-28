/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  Stack,
  Typography,
  TextField,
  Button,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";

const AddBookModal = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const handleCancel = (event) => {
    event.stopPropagation();
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropProps={{ onClick: handleCancel }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 883,
          height: 505,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "16px",
        }}
      >
        <Stack height="100%" justifyContent="space-between">
          <Box
            bgcolor="#BF5523"
            sx={{
              paddingX: 3,
              paddingY: "18px",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
            }}
          >
            <Typography variant="h5" color="white">
              New Book
            </Typography>
          </Box>

          <Stack height="100%" justifyContent="space-around">
            <Stack spacing={1} paddingX={3}>
              <Typography variant="body1">Book Name</Typography>
              <TextField
                placeholder="Enter Book Name"
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
              />
            </Stack>

            <Stack spacing={1} paddingX={3}>
              <Typography variant="body1">Number Of Pages</Typography>
              <TextField
                placeholder="Enter Number Of Pages"
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
              />
            </Stack>

            <Stack spacing={1} paddingX={3}>
              <Typography variant="body1">Author</Typography>
              <Select
                value="Select Author"
                sx={{ height: "43px", backgroundColor: "white" }}
              >
                <MenuItem value={"Select Author"}>Select Author</MenuItem>
              </Select>
            </Stack>
          </Stack>

          <Stack
            alignItems="flex-end"
            justifyContent="flex-end"
            paddingX={3}
            pb={3}
          >
            <Divider sx={{ width: "100%", my: 3 }} />

            <Stack direction="row" spacing={2}>
              <Button onClick={handleClose} variant="outlined">
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    backgroundColor: "#C76128",
                  },
                }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddBookModal;
