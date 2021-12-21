import React from 'react'
import {Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import {Link} from "react-router-dom"



function Cards({results, page}) {
    let display;


    if (results) {
        display = results.map(x=>{
            let {id, name, image, location,species} = x
            

           return(<Grid key={id} item md={4}>
                    <Card  sx={{ maxWidth: 300, height: '520px' }}>
                            <CardMedia
                            component="img"
                            height="300"
                            image={image}
                            alt={name}
                            > 
                            </CardMedia>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                Location:
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                {location.name}
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                Species:
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                {species}
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} to = {`${page}${id}`} size="small" color="primary">
                                More info
                                </Button>
                            </CardActions>
                    </Card>   
                    </Grid>
                    ) 
        })
    }
    else {
        display = "No Characters Found :(";
    }

    return (
        <>{display}</>
        
          
    )
}

export default Cards








