import React from 'react'

export const Footer = ({ setCurrentPage, currentPage, totalActions, itemsPerPage}) => {
	
	
	const nextPage = () => {
		if (currentPage < Math.ceil(totalActions.length / itemsPerPage)) {

			setCurrentPage(currentPage + 1);

		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};


	return (
		<div className='footer'>
			<button  onClick={prevPage} disabled={currentPage === 1} className='button'>
				Anterior
			</button>
			<p>{currentPage}</p>
			<p> de {Math.ceil(totalActions.length / itemsPerPage)}</p>
			<button onClick={nextPage} disabled={currentPage === Math.ceil(totalActions.length / itemsPerPage)} className='button'>
				Siguiente
			</button>
		</div>
	)
}
