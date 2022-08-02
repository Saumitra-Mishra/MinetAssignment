import { Box,Typography } from "@mui/material";
import Icon from "@mui/material/Icon";

const BalanceBox = ({ cryptoName }: any) => {
  return (
    <div>
      <Box>
        <Icon></Icon>
        <Typography>{cryptoName}</Typography>
      </Box>
      <Typography></Typography>
    </div>
  );
};

export default BalanceBox;
