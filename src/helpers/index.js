


export const generateArray = (startDate, endDate) => {

	 const datesArray = []

	 for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
		  const year = date.getFullYear();
		  const month = String(date.getMonth() + 1).padStart(2, '0');
		  const day = String(date.getDate()).padStart(2, '0');
		  const formattedDate = `${year}-${month}-${day}`;
		  datesArray.push(formattedDate);


	 }

	 return datesArray.sort((a, b) => (a.time > b.time) ? 1 : -1);
}
