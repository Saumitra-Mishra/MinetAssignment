import { FormLabel, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ButtonComponent from "../../atoms/Button";

const OrderDetail = ({ amount, method, deposit }: any) => {
  return (
    <div>
      <Box>
        <Typography></Typography>
        <Typography>{amount}</Typography>
        <Typography></Typography>
      </Box>
      <Grid>
        <Box>
          <FormLabel></FormLabel>
          <Typography>{method}</Typography>
        </Box>
        <Box>
          <FormLabel></FormLabel>
          <Typography></Typography>
        </Box>
        <Box>
          <FormLabel></FormLabel>
          <Typography>{deposit}</Typography>
        </Box>
      </Grid>
      <Typography></Typography>
      <Typography></Typography>
      <Typography></Typography>
      <ButtonComponent></ButtonComponent>
    </div>
  );
};

export default OrderDetail;