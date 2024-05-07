import { useEffect, useState } from 'react';
import { requestApi } from '../api';

export const useActions = () => {
  const [totalActions, setTotalActions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 50;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listActions = await requestApi.get('https://api.twelvedata.com/stocks?&apikey=f1f4a4a8486f418ca3b9c6f8ed4fb1a1&source=docs');
        setTotalActions(listActions.data);
      } catch (error) {
        console.log('Error al obtener datos de Api:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const filteredActions = totalActions.filter((item) =>
    item.symbol.toLowerCase().includes(searchQuery) ||
    item.name.toLowerCase().includes(searchQuery)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredActions.slice(indexOfFirstItem, indexOfLastItem);

  return {
    totalActions,
    currentItems,
    currentPage,
    itemsPerPage,
    searchQuery,
    handleSearch,
    setCurrentPage,
  };
};