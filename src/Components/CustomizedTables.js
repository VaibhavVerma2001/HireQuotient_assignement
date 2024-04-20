import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#f5f5f5",
        color: "#0B8190",
        fontWeight : "700"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function CustomizedTables(props) {

    const rows = props.rows;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>NAME OF THE HOLDING</StyledTableCell>
                        <StyledTableCell align="right">TICKER</StyledTableCell>
                        <StyledTableCell align="right">AVERAGE PRICE</StyledTableCell>
                        <StyledTableCell align="right">MARKET PRICE</StyledTableCell>
                        <StyledTableCell align="right">LATEST CHANGE PERCENTAGE</StyledTableCell>
                        <StyledTableCell align="right">MARKET VALUE IN CCY</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.ticker}</StyledTableCell>
                            <StyledTableCell align="right">{row.avg_price}</StyledTableCell>
                            <StyledTableCell align="right">{row.market_price}</StyledTableCell>
                            <StyledTableCell align="right">{row.market_value_ccy}</StyledTableCell>
                            {row.latest_chg_pct >= 0 ? (
                                <StyledTableCell  align="right">{row.latest_chg_pct}</StyledTableCell>
                            ):(
                                <StyledTableCell style={{color:"red"}}  align="right">{row.latest_chg_pct}</StyledTableCell>
                            )}
                            
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}