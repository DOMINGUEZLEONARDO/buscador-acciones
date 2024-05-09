import { Link, useParams } from "react-router-dom";
import { RealTime } from "../components/realTime";
import { Chart } from "../components/chart";
import { Historical } from "../components/historical";
import { useDetails } from "../hooks/useDetails";
import { useEffect, useState } from "react";


export const DetailsView = () => {

    const [showContent, setShowContent] = useState(true);
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
        setInterval,
        errorData
    } = useDetails();



    const chartData = {
        xAxis: quoteTimes.map((quote) => quote.time),
        series: [{ data: quoteTimes.map((quote) => quote.close) }],

    };


    return (
        <>
            {errorData === true ? (
                <>
                    <h1> No hay datos para la acción seleccionada </h1>
                    <Link to='/'>
                        <button className="button">
                            Volver
                        </button>
                    </Link>
                </>
            ) : (
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
            )}

        </>

    );
};