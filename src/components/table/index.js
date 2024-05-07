
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react'
import { Link } from 'react-router-dom';


export const StockTable = ({ currentItems}) => {
	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
			'&.name': {
				maxWidth: 100,
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
			},

		},
		[`&.${tableCellClasses.body}`]: {
			fontSize: 14,
		},
	}));

	const StyledTableHead = styled(TableHead)(({ theme }) => ({
		position: 'sticky',
		top: 0,
		backgroundColor: theme.palette.background.paper,
	}));

	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},

		'&:last-child td, &:last-child th': {
			border: 0,
		},
	}));

	

	return (
		<div>
			<TableContainer sx={{ maxHeight: 700, maxWidth: 1100, margin: 10 }}>
				<Table aria-label="customized table">
					<StyledTableHead>
						<TableRow>
							<StyledTableCell align="center" >Simbol</StyledTableCell>
							<StyledTableCell align="center" className='name' >Nombre</StyledTableCell>
							<StyledTableCell align="center" >Moneda</StyledTableCell>
							<StyledTableCell align="center">Tipo</StyledTableCell>
						</TableRow>
					</StyledTableHead>
					<TableBody>
						{
							currentItems.map((items, index) => (
								<StyledTableRow key={index}>
									<StyledTableCell component="th" scope="row" align="center">
										<Link to={`/detalle/${items.symbol}`}>
											{items.symbol}
										</Link>
									</StyledTableCell>
									<StyledTableCell align="center">{items.name}</StyledTableCell>
									<StyledTableCell align="center">{items.exchange}</StyledTableCell>
									<StyledTableCell align="center">{items.type}</StyledTableCell>
								</StyledTableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>			
		</div>
	)
}
