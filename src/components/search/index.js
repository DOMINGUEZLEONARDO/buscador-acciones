import { TextField } from '@mui/material'
import React from 'react'

export const Search = ({searchQuery, handleSearch}) => {
  return (
	 <div className='search'>
	 <TextField 
        label="Ingrese nombre o Simbol"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
      />
	 </div>
  )
}
