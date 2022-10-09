import * as React from "react";
import { ReactElement, useState } from "react";

import Typography from "@mui/material/Typography";
import { CircularProgress, Grid, Stack } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { Transaction } from "../typedefs/Transaction";
import { MeterValueType } from "ocpp-messages-ts/types/TransactionEventRequest";

/***************************************************************************/

interface Props {
  transaction: Transaction;
}

/***************************************************************************/

export default function TransactionItem(props: Props) {
  let meterValues = props.transaction.meterValues;
  let meterValuesLen = meterValues.length;
  let meterValuesLast: MeterValueType = meterValues[meterValuesLen - 1];
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack spacing={1} direction="column">
          <Typography component="div">
            station: <span> </span> {props.transaction.stationId}
          </Typography>
          <Typography component="div">
            energyTransferInProgress: <span> </span>{" "}
            {props.transaction.energyTransferInProgress ? "TRUE" : "FALSE"}
          </Typography>
          <Typography component="div">
            energyTransferStarted: <span> </span>{" "}
            {props.transaction.energyTransferStarted}
          </Typography>
          <Typography component="div">
            energyTransferStopped: <span> </span>{" "}
            {props.transaction.energyTransferStopped}
          </Typography>
          <Typography component="div">
            {meterValuesLast.sampledValue[0].measurand} <span> : </span>
            {meterValuesLast.sampledValue[0].value} <span> </span>
            {meterValuesLast.sampledValue[0].unitOfMeasure?.unit}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
