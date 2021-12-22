import { FormControl, InputLabel, MenuItem, Select, Box} from '@mui/material'
import React from 'react'

function FilterType({updateType, setPageNumber, type, updateDimension}) {

    let typeArray = ["Planet", "Cluster", "Space station", "Microverse", "TV", "Resort", "Fantasy town", "Dream", "Customs", "Game", "Menagerie", "Dimension", "unknown", "Consciousness", "Country", "Hell", "Police Department", "Space", "Human", "Elemental Rings", "Base", "Liquid", "Spacecraft", "Death Star", "Reality", "Acid Plant", "Asteroid", "Diegesis", "Woods", "Mount", "Quasar", "Quadrant","Teenyverse", "Miniverse"];

    const handleChange = (event) => {
        updateType(event.target.value);
        updateDimension("");
      setPageNumber(1);    }
      ;
    return (
      <Box sx={{mt: '10px', maxWidth: '90%', ml: '15px' }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Choose type"
          onChange={handleChange}
        >
        
        {typeArray.map((item, index) => (
    <MenuItem value={item} key={index}>{item}</MenuItem>
  ))}
  </Select>
      </FormControl>
      </Box>
    )
}

export default FilterType
