import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, TextField } from '@mui/material';

const initialState = {
  headers: {
    required: [false, []],
    typeBased: [false, []],
    sqlInjection: [false, []],
    bruteForce: [false, []]
  }
};

const MyComponent = () => {
  const [state, setState] = useState(initialState);

  const handleCheckboxChange = (headerType) => {
    setState((prevState) => ({
      ...prevState,
      headers: {
        ...prevState.headers,
        [headerType]: [!prevState.headers[headerType][0], prevState.headers[headerType][1]]
      }
    }));
  };

  const handleInputChange = (headerType, event) => {
    setState((prevState) => ({
      ...prevState,
      headers: {
        ...prevState.headers,
        [headerType]: [prevState.headers[headerType][0], event.target.value]
      }
    }));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(state.headers).map((headerType) => (
              <TableCell key={headerType}>{headerType}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {Object.keys(state.headers).map((headerType) => (
              <TableCell key={headerType}>
                <Checkbox
                  checked={state.headers[headerType][0]}
                  onChange={() => handleCheckboxChange(headerType)}
                />
                {state.headers[headerType][0] && (
                  <TextField
                    value={state.headers[headerType][1]}
                    onChange={(event) => handleInputChange(headerType, event)}
                  />
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyComponent;
