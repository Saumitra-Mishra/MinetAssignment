import { Typography } from "@mui/material";
import Icon from "../../atoms/Icon";

const CryptoBox = ({price}: any) => {
  return (
    <div>
      <Icon src=""></Icon>
      <Typography></Typography>
      <Typography>{price}</Typography>
    </div>
  );
};

export default CryptoBox;
