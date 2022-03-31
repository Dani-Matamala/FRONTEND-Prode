import React from 'react'
import { Grid } from '@material-ui/core'
import Grupos from './Grupos'

function Home() {
    return (
        <div>
            <Grid container direction="column">
                <Grid item container>
                    <Grid item xs={12}>
                        <Grupos />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home