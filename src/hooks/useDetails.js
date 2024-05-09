import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestApi } from "../api";
import { generateArray } from "../helpers";

export const useDetails = () => {
  const { symbol } = useParams();
  const [quoteTimes, setQuoteTimes] = useState([]);
  const [interval, setInterval] = useState("1min");
  const [historyInterval, setHistoryInterval] = useState("");
  const [mode, setMode] = useState("realTime");
  const [startDateIndex, setStartDateIndex] = useState("");
  const [endDateIndex, setEndDateIndex] = useState("");
  const [errorData, setErrorData] = useState(false)

  useEffect(() => {
    if (mode === "realTime") {
      const fetchData = async () => {
        try {
          const { values } = await requestApi.get(
            `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=f1f4a4a8486f418ca3b9c6f8ed4fb1a1`
          );
          if (values.length > 0) {
            const times = values.map((quote) => ({
              close: parseFloat(quote.close),
              time: quote.datetime.split(" ")[1].substring(0, 5),
            }));
            times.sort((a, b) => (a.time > b.time ? 1 : -1));
            setQuoteTimes(times);
          }
        } catch (error) {
          console.log("Error al obtener datos de Api:", error);
          setErrorData(true)
        }
      };

      fetchData();
    }
  }, [symbol, interval, mode,]);

  const handleHistoryInterval = (event) => {
    setHistoryInterval(event.target.value);
  };

  const handleStartDate = (event) => {
    setStartDateIndex(event.target.value);
  };

  const handleEndDate = (event) => {
    setEndDateIndex(event.target.value);
  };

  const handleCheckBox = () => {
    setMode(mode === "realTime" ? "historical" : "realTime");
  };

  const click = async () => {
    if (mode === "historical") {
      try {
        const { values } = await requestApi.get(
          `https://api.twelvedata.com/time_series?&start_date=${startDateIndex}&end_date=${endDateIndex}&symbol=${symbol}&interval=${historyInterval}&apikey=f1f4a4a8486f418ca3b9c6f8ed4fb1a1`
        );

        if (values && values.length > 0) {
          const times = values.map((quote) => ({
            close: parseFloat(quote.close),
            time: quote.datetime.includes(" ")
              ? quote.datetime.split(" ")[1].substring(0, 5)
              : quote.datetime,
          }));
          times.sort((a, b) => (a.time > b.time ? 1 : -1));
          setQuoteTimes(times);
        }
      } catch (error) {
        console.log("Error al obtener datos de Api:", error);
        console.log('first')
      }
    }
  };

  const startDate = new Date(2020, 0, 1);
  const endDate = new Date();
  const dates = generateArray(startDate, endDate);

  return {
    quoteTimes,
    interval,
    mode,
    historyInterval,
    startDateIndex,
    endDateIndex,
    dates,
    handleHistoryInterval,
    handleStartDate,
    handleEndDate,
    handleCheckBox,
    click,
    setInterval,
    errorData
  };
};
