import { Checkbox } from '@mui/material';



export const RealTime = ({handleCheckBox, mode, interval, setInterval}) => {
	
	const handleSubmit = (event) => {
		setInterval(event.target.value);
  };
  return (
	<>
	
	<h2 className="title1">Cotización del dia</h2>
	<p className="pDetails">Obtiene la cotización del día de hoy según el intervalo de tiempo seleccionado</p>
	<div className="checkBoxRealTime">
	
	
	<Checkbox
		 checked={mode === 'realTime'}
		 onChange={handleCheckBox}
		 inputProps={{ 'aria-label': 'historical-mode-checkbox' }}
		 
		 
	/>
	<select className="select" value={interval} onChange={handleSubmit}>
		 <option value='' disabled hidden>Seleccionar Intervalo</option>
		 <option value='1min'>1 minuto</option>
		 <option value='5min'>5 minutos</option>
		 <option value='15min'>15 minutos</option>
	</select>
	</div>
	</>

  )
}
