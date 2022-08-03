import { Grid, Typography, Box } from "@mui/material"
import AvatarComponent from "../../atoms/Avatar"
import ButtonComponent from "../../atoms/Button"



const Header = () => {
    const showUserProfile = () => {

    }
    return <Grid>
        <Grid item>
            <Typography></Typography>
        </Grid>
        <Grid item>
            <ButtonComponent></ButtonComponent>
            <ButtonComponent></ButtonComponent>
        </Grid>
        <Grid item>
            <Box onClick={showUserProfile}><AvatarComponent></AvatarComponent></Box>
        </Grid>
    </Grid>
}

export default Header;