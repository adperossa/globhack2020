import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StarRating from './StarRating';

export default function RankingCompany(props) {

  const [showRankingCompany, setShowRankingCompany] = useState([]);

  useEffect( () => {
    // setshowRankingCompany(companies);
    fetch('http://localhost:8080/api/companyRanking')
    .then(res => res.json())
    .then(res => {
      setShowRankingCompany(res.companies);
    });
  } ,[])

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

  function createData(position, company, average) {
    return { position, company, average };
  }

    const rows = showRankingCompany.map((company, index) => {
      return {
        position: index + 1,
        company: company.name,
        Average: company.globalAverage
      };
    });


  console.log(typeof showRankingCompany);

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
                  <StyledTableCell align="left">Empresa</StyledTableCell>
                  <StyledTableCell align="center">Reseñas</StyledTableCell>
                  <StyledTableCell align="right">Promedio general</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.position} className={`important-${row.position}`}>
                    <StyledTableCell component="th" scope="row">
                      {row.position}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.company}</StyledTableCell>
                    <StyledTableCell align="center">3</StyledTableCell>
                    <StyledTableCell className='mr-5' align="right">{row.Average}<StarRating  rating={Math.round(row.Average)} /></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      )

}