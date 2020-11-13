import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { findRenderedComponentWithType } from 'react-dom/cjs/react-dom-test-utils.development';


const FormattedTable = (props) => {

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    table_header: {
      background: "#282c34",
    },
    table_cell: {
      color: "white",
    }, 
  });


var planetArr = Object.values(props);

console.log(planetArr[0].length);



  function createData(name, terrain, population) {
    return { name, terrain, population};
  }
  
  var rows = [];


  for (var i = 0; i < planetArr[0].length; i++) {
    var row = createData(planetArr[0][i], planetArr[0][++i], planetArr[0][++i]);
    rows.push(row);
  };

    
  const classes = useStyles();
  

  return (

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.table_header}>
            <TableCell className={classes.table_cell}>Planet Name</TableCell>
            <TableCell className={classes.table_cell} align="right">Terrain</TableCell>
            <TableCell className={classes.table_cell} align="right">Population</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.terrain}</TableCell>
              <TableCell align="right">{row.population}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
  );

}

export default FormattedTable;