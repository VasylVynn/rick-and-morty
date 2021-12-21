import React from 'react'
import {Pagination, Stack} from '@mui/material';

function MyPagination({setPageNumber, info}) {
    let { pages } = info || {};

    return (
        <Stack spacing={2} justifyContent="center"
           alignItems="center" >
           <Pagination count={pages} onChange={(_, num) => setPageNumber(num)} variant="outlined" color="primary" showFirstButton showLastButton />
         </Stack>
    )
}

export default MyPagination
