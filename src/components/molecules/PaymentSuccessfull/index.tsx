import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import ButtonComponent from "../../atoms/Button"
import Icon from "../../atoms/Icon"




const PaymentSuccessfull = ({balance}: any) => {
    return <div>
        <Icon></Icon>
        <Typography>{balance}</Typography>
        <Grid>
            <Grid item><ButtonComponent></ButtonComponent></Grid>
            <Grid item><ButtonComponent></ButtonComponent></Grid>
        </Grid>
    </div>
}

export default PaymentSuccessfull;