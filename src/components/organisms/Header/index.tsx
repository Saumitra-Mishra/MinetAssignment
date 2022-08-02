import { Grid, Typography } from "@mui/material"
import AvatarComponent from "../../atoms/Avatar"
import ButtonComponent from "../../atoms/Button"



const Header = () => {
    return <Grid>
        <Grid item>
            <Typography></Typography>
        </Grid>
        <Grid item>
            <ButtonComponent></ButtonComponent>
            <ButtonComponent></ButtonComponent>
        </Grid>
        <Grid item>
            <AvatarComponent></AvatarComponent>
        </Grid>
    </Grid>
}

export default Header;