import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { SideBar, NavBar } from "../components";


const drawerWidth = 240;


export const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

        <NavBar drawerWidth={ drawerWidth } />

        <SideBar drawerWidth={ drawerWidth } />

        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />
            { children }
        </Box>


    </Box>
  )
}