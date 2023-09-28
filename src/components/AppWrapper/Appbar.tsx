import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { drawerWidth } from "./SideBar";
import { Divider, Stack, Typography, capitalize } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const AppBarComponent = () => {
  const { asPath } = useRouter();

  const mainPath = asPath.split("/")[1];

  const breadcrumbFirstPath =
    asPath.split("/")[1] === "shop" ? "shop" : "admin";

  const breadcrumbSecondPath = asPath.split("/")[2];

  const isAdminRoute = breadcrumbFirstPath === "admin";

  return (
    <Stack
      sx={{
        paddingLeft: `${drawerWidth + 32}px`,
        pr: 4,
      }}
    >
      <Stack justifyContent="space-between" direction="row">
        <Stack>
          <Typography variant="h5" fontWeight={500} color="#3E435D">
            {capitalize(mainPath)}
          </Typography>

          <Stack direction="row" spacing={1}>
            <Typography variant="caption" fontWeight={300} color="#3E435D">
              {capitalize(breadcrumbFirstPath)}
            </Typography>
            {(breadcrumbSecondPath || isAdminRoute) && (
              <>
                <Typography variant="caption" fontWeight={300} color="#3E435D">
                  {">"}
                </Typography>
                <Typography variant="caption" fontWeight={300} color="#3E435D">
                  {capitalize(
                    isAdminRoute
                      ? (mainPath as string)
                      : (breadcrumbSecondPath as string)
                  )}
                </Typography>
              </>
            )}
          </Stack>
        </Stack>

        <Image
          src="/images/user-image.svg"
          alt="bookstore-img"
          width={213}
          height={52}
        />
      </Stack>

      <Divider sx={{ width: "100%", mt: 4 }} />
    </Stack>
  );
};

export default AppBarComponent;
