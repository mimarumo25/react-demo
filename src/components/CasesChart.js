import { CircularProgress, Tooltip, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";


const CasesChart = () => {
  const [cases, setCases] = useState([
    {
      status: "Éxito",
      responseCode: 200,
      validationStatus: "OK",
    },
    {
      status: "Fallido",
      responseCode: 400,
      validationStatus: "FALLO",
    },
    {
      status: "Fallido",
      responseCode: 400,
      validationStatus: "OK",
    },
  ]);

  useEffect(() => {
    setCases([
      {
        status: "Éxito",
        responseCode: 200,
        validationStatus: "OK",
      },
      {
        status: "Fallido",
        responseCode: 400,
        validationStatus: "FALLO",
      },
      {
        status: "Fallido",
        responseCode: 400,
        validationStatus: "OK",
      },
    ]);
  }, []);

  const successfulCases = cases?.filter((caso) => caso.status === "Éxito");
  const failedCases = cases?.filter((caso) => caso.status !== "Éxito");

  const successfulCasesPercentage = (
    successfulCases.length / (cases.length - failedCases.length)
  ) * 100;
  const failedCasesPercentage = (failedCases.length / cases.length) * 100;

  return (
    <div>
      <CircularProgress
        value={successfulCasesPercentage}
        strokeWidth={10}
       
        label="Casos exitosos"
      />
      <Tooltip title="Casos exitosos: {successfulCases.length}">
        <Typography variant="subtitle2">
          {successfulCasesPercentage}%
        </Typography>
      </Tooltip>
      <CircularProgress
        value={failedCasesPercentage}
        strokeWidth={10}
        
        label="Casos fallidos"
      />
      <Tooltip title="Casos fallidos: {failedCases.length}">
        <Typography variant="subtitle2">
          {failedCasesPercentage}%
        </Typography>
      </Tooltip>
    </div>
  );
};

export default CasesChart;
