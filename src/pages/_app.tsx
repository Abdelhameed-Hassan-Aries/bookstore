import "../styles/styles.scss";
import Layout from "../components/Layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import WithAppWrapper from "../components/AppWrapper/AppWrapper";

const clientSideEmotionCache = createEmotionCache();
const LayoutWithSidebar = WithAppWrapper(Layout);

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <LayoutWithSidebar>
              <Component {...pageProps} />
            </LayoutWithSidebar>
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
