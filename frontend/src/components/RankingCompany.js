import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function RankingCompany(props) {

  const [showRankingCompany, setshowRankingCompany] = useState('');

  let companies = [
    {
      name: "Globant",
      overage: 2.8
    },
    {
      name: "Accenture",
      overage: 1.8
    },
    {
      name: "Mercadolibre",
      overage: 3.8
    },
    {
      name: "Atos",
      overage: 5.8
    },
    {
      name: "Fizzmod",
      overage: 1.2
    },
  ]

  useEffect( () => {

        // setshowRankingCompany(companies);
        fetch('http://localhost:8080/api/companies')

        .then(res => res.json())

        .then(res => {
            setshowRankingCompany(res.companies);
          }
        );
    
    } ,[]
  )

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#316e9e',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 12,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(position, company, overage) {
    return { position, company, overage };
  }

  const rows = [
    createData(1, "Globant", 6.0),
    createData(2, "Bellatrix", 9.0),
    createData(3, "Atos", 16.0),
    createData(4, "Accenture", 3.7),
    createData(5, "Mercadolibre", 16.0),
  ];

  const useStyles = makeStyles({
    table: {
      width: '800px',
      marginRight: 'auto',
      marginLeft: 'auto',
      margin: '30px'
    },
  });

  const classes = useStyles();

      return (
          <TableContainer>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>#</StyledTableCell>
                  <StyledTableCell align="left">Company</StyledTableCell>
                  <StyledTableCell align="right">Overage</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.position}>
                    <StyledTableCell component="th" scope="row">
                      {row.position}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.company}</StyledTableCell>
                    <StyledTableCell align="right">{row.overage}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      )

}