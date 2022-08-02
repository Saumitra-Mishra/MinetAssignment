import { Box } from "@mui/material"
import CryptoGraph from "../../organisms/CryptoGraph"
import Footer from "../../organisms/Footer"
import Header from "../../organisms/Header"
import SideNav from "../../organisms/SideNav"


const Dashboard = () => {
    return <Box>
        <Header></Header>
        <SideNav></SideNav>
        <CryptoGraph ></CryptoGraph>
        <Footer></Footer>
    </Box>
}

export default Dashboard