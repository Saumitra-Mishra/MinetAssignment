import { Grid, Box, Stepper } from "@mui/material"


const CryptoGraph = ({data} : any) => {
    return <Grid>
        <Grid item>
            {/* Contains logic to plot the graph and the option to change Time */}
        </Grid>
        <Grid item>
            <Stepper>{/* map the data */}</Stepper>
        </Grid>
    </Grid>
}

export default CryptoGraph;