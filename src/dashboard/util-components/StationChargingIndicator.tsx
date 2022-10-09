import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Copyright as cpIcon } from "@mui/icons-material";

import BatteryCharging20Icon from "@mui/icons-material/BatteryCharging20";
import BatteryCharging30Icon from "@mui/icons-material/BatteryCharging30";
import BatteryCharging50Icon from "@mui/icons-material/BatteryCharging50";
import BatteryCharging60Icon from "@mui/icons-material/BatteryCharging60";
import BatteryCharging80Icon from "@mui/icons-material/BatteryCharging80";
import BatteryCharging90Icon from "@mui/icons-material/BatteryCharging90";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import theme from "../../app/theme/AppTheme";

export default function StationChargingIndicator(props: any) {
  const [batteryIconNumber, setBatteryIconNumber] = React.useState<number>(0);

  function tick() {
    setBatteryIconNumber((prev) => {
      if (prev === icons.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }

  let intervalID: any = 0;

  React.useEffect(() => {
    intervalID = setInterval(tick, 200);
    return () => {
      clearInterval(intervalID);
    };
  });

  const icons: JSX.Element[] = [
    <BatteryCharging20Icon
      sx={{ ...props.sx, color: theme.palette.success.main }}
    />,
    <BatteryCharging30Icon
      sx={{ ...props.sx, color: theme.palette.success.main }}
    />,
    <BatteryCharging50Icon
      sx={{ ...props.sx, color: theme.palette.success.main }}
    />,
    <BatteryCharging60Icon
      sx={{ ...props.sx, color: theme.palette.success.main }}
    />,
    <BatteryCharging80Icon
      sx={{ ...props.sx, color: theme.palette.success.main }}
    />,
    <BatteryCharging90Icon
      sx={{ ...props.sx, color: theme.palette.success.main }}
    />,
    <BatteryChargingFullIcon
      sx={{ ...props.sx, color: theme.palette.success.main }}
    />,
  ];

  return icons[batteryIconNumber];
}
