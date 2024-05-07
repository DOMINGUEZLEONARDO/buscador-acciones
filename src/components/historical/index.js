import { Checkbox } from '@mui/material'
import React from 'react'

export const Historical = ({ mode,
	handleCheckBox,
	startDateIndex,
	handleStartDate,
	endDateIndex,
	handleEndDate,
	historyInterval,
	handleHistoryInterval,
	dates }) => {
	return (
		<>
			<h2 className="titleHistorical">Cotización historica de la acción</h2>
			<p className="pDetails">
				Podrá obtener la cotización del a acción según las fechas seleccionadas
				y el intervalo de tiempo
			</p>
			<Checkbox
				checked={mode === "historical"}
				onChange={handleCheckBox}
				inputProps={{ "aria-label": "historical-mode-checkbox" }}
			/>
			<select className="select" value={startDateIndex} onChange={handleStartDate}>
				<option value="" disabled hidden>
					Seleccionar fecha desde{" "}
				</option>
				{dates.map((date, index) => (
					<option key={index}>{date}</option>
				))}
			</select>
			<select className="select" value={endDateIndex} onChange={handleEndDate}>
				<option value="" disabled hidden>
					Seleccionar fecha hasta{" "}
				</option>
				{dates.map((date, index) => (
					<option key={index}>{date}</option>
				))}
			</select>
			<select
				className="select"
				value={historyInterval}
				onChange={handleHistoryInterval}
			>
				<option value="" disabled hidden>
					Seleccionar Intervalo
				</option>
				<option value="1min">1 minuto</option>
				<option value="5min">5 minutos</option>
				<option value="15min">15 minutos</option>
				<option value="30min">30 minutos</option>
				<option value="1day">1 día</option>
				<option value="1week">1 Semana</option>
				<option value="1month">1 Mes</option>
			</select>
		</>
	)
}
