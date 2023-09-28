/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, Divider, Stack, TextField, Typography } from "@mui/material";

const AddAuthorModal = ({ open, onClose }) => {
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
          height: 456,
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
              New Author
            </Typography>
          </Box>

          <Stack spacing={1} paddingX={3}>
            <Typography variant="body1">New Author</Typography>
            <TextField
              placeholder="Enter Author Full Name"
              id="outlined-multiline-flexible"
              multiline
              maxRows={4}
            />
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

export default AddAuthorModal;
