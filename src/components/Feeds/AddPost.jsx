import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import React, { useState } from "react";
import { grey } from "@mui/material/colors";

const AddPost = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: { xs: 20, sm: "unset" },
        left: { xs: "unset", sm: 20 },
      }}
    >
      <Tooltip title="Add Post" onClick={() => setModalOpen(() => true)}>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={modalOpen}
        onClose={() => setModalOpen(() => false)}
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          sx={{
            height: 400,
            width: 400,
            borderRadius: 5,
            padding: 3,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color={grey.A700}
            mb={2}
            textAlign="center"
          >
            Create Post
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Avatar>P</Avatar>
            <Typography component="p" fontWeight="500">
              John Due
            </Typography>
          </Box>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            label="What is on your mind?"
            multiline
            rows={2}
            // placeholder="Default Value"
            variant="standard"
          />
          <Stack direction="row" gap={2} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <Button size="large" fullWidth variant="contained">
            Post
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddPost;
