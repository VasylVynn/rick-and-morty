import React, {useState, useEffect} from 'react'
import EpisodeCard from './components/EpisodeCard';
import Grid from '@mui/material/Grid';
import MyPagination from '../../UI/Pagination'
import Search from '../../UI/Search';


const Episodes = () => {
    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [fetchedData, updateFetchedData] = useState([]);
    let api=`https://rickandmortyapi.com/api/episode/?page=${pageNumber}&name=${search}`
  let {info, results} = fetchedData;


    useEffect(() =>{
    (async function(){
        let data = await fetch(api).then(res=> res.json());
        updateFetchedData(data)
    })()
    

    },[api])
    return (
        <Grid container spacing={2} justifyContent="center" sx={{mt:'60px'}} >
            <Grid item md={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Search setSearch={setSearch} />
            </Grid>
            <Grid container item md={11}>
                <EpisodeCard page="/episodes/" results={results} />
            </Grid>
            <Grid item md={12}>
          <MyPagination info={info} setPageNumber={setPageNumber} />
        </Grid>

        </Grid>
    
    )
}

export default Episodes
