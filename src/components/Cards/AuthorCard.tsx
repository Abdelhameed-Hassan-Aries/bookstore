import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import Image from "next/image";

const AuthorCard = ({ data }) => {
  const { name, publishBooks, image } = data;
  return (
    <Card
      sx={{
        maxWidth: "456px",
        minWidth: "456px",
        height: "214px",
        padding: 3,
        borderRadius: "8px",
      }}
    >
      <Stack direction="row" spacing={2} width="100%" height="100%">
        <Image src={image} alt="bookstore-img" width={125} height={164} />

        <Stack width="100%" height="100%">
          <Stack spacing={1} width="100%" height="100%">
            <Stack spacing={0}>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{ color: "black" }}
              >
                {name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#BF5523" }}>
                Publish Books: {publishBooks}
              </Typography>
            </Stack>

            <Stack
              spacing={0}
              width="100%"
              height="100%"
              alignItems="flex-end"
              justifyContent="flex-end"
            >
              <Button
                sx={{
                  padding: 0,
                  color: "white",
                  backgroundColor: "#BF5523",
                  px: 1,
                  width: "fit-content",
                  py: "2px",
                  "&:hover": {
                    backgroundColor: "#BF5523",
                  },
                }}
              >
                View Profile
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default AuthorCard;
