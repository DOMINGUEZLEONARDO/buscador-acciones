import React from 'react';
import { Header } from '../components/header';
import { Search } from '../components/search';
import { StockTable } from '../components/table';
import { Footer } from '../components/footer';
import CircularProgress from '@mui/joy/CircularProgress';
import { Box } from '@mui/material';
import { useActions } from '../hooks/useActions';

export const ActionsView = () => {

  const {
    totalActions,
    currentItems,
    currentPage,
    itemsPerPage,
    searchQuery,
    handleSearch,
    setCurrentPage, } = useActions();


  return (
    <>
      <Header />
      {currentItems.length > 0 ? (
        <React.Fragment>
          <Search searchQuery={searchQuery} handleSearch={handleSearch} />
          <StockTable currentItems={currentItems} />
          <Footer
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalActions={totalActions}
            itemsPerPage={itemsPerPage} />
        </React.Fragment>
      ) : (
        <Box>
          <CircularProgress />
        </Box>
      )}
    </>

  )
}  
