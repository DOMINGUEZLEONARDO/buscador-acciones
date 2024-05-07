import { Link, useParams } from "react-router-dom";
import { RealTime } from "../components/realTime";
import { Chart } from "../components/chart";
import { Historical } from "../components/historical";
import { useDetails } from "../hooks/useDetails";


export const DetailsView = () => {
    const { symbol } = useParams();

    const {
        quoteTimes,
        interval,
        mode,
        historyInterval,
        startDateIndex,
        endDateIndex,
        dates,
        handleHistoryInterval,
        handleStartDate,
        handleEndtDate,
        handleCheckBox,
        click,
        setInterval } = useDetails();

    const chartData = {
        xAxis: quoteTimes.map((quote) => quote.time),
        series: [{ data: quoteTimes.map((quote) => quote.close) }],
    };

    return (
        <>
            <h2 className="actionSymbol">{symbol}</h2>
            <hr />
            <RealTime
                handleCheckBox={handleCheckBox}
                mode={mode}
                interval={interval}
                setInterval={setInterval} />
            <Historical
                mode={mode}
                handleCheckBox={handleCheckBox}
                startDateIndex={startDateIndex}
                handleStartDate={handleStartDate}
                endDateIndex={endDateIndex}
                handleEndtDate={handleEndtDate}
                historyInterval={historyInterval}
                handleHistoryInterval={handleHistoryInterval}
                dates={dates}
            />
            <button className="button" onClick={click}>Graficar </button>

            <Chart
                chartData={chartData}
                quoteTimes={quoteTimes} />
            <Link to='/'>
                <button className="button">
                    Volver
                </button>
            </Link>

        </>
    );
};