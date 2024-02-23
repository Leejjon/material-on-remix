import { ThemeProvider } from "@mui/material";
import theme from '../theme/theme';
import { Outlet } from "@remix-run/react";

export default function Component() {

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Outlet/>
            </ThemeProvider>
        </div>
    );
}