import { Box } from "@mui/material"
import CryptoInfo from "../../molecules/CryptoInfo"
import CryptoGraph from "../../organisms/CryptoGraph"
import Footer from "../../organisms/Footer"
import Header from "../../organisms/Header"
import SideNav from "../../organisms/SideNav"


const DetailScreen = () => {
    return <Box>
        <Header></Header>
        <SideNav></SideNav>
        <CryptoInfo></CryptoInfo>
        <CryptoGraph></CryptoGraph>
        <Footer></Footer>
    </Box>
}

export default DetailScreen