import { LineChart } from "@mui/x-charts"

export const Chart = ({ chartData, quoteTimes }) => {
	
	
 
	

	return (
		
		<div className="chart-container">

                {quoteTimes.length > 0 && (
                    <LineChart
                        width={500}
                        height={300}
                        series={chartData.series}
                        xAxis={[{ scaleType: 'point', data: chartData.xAxis }]}
                        className="chart"
                    />
                )}

            </div>


		
		
	)
}
