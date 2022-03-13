import React from "react";
import HomeIcon from '@mui/icons-material/Home'
import SportsSoccerRounded from '@mui/icons-material/SportsSoccerRounded'
import News from '@mui/icons-material/Newspaper'
import Done from '@mui/icons-material/Done'
import People from '@mui/icons-material/People'

export const SidebarData = [
    {
        title:"Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title:"Partidos",
        icon: <SportsSoccerRounded />,
        link: "/partidos"
    },
    {
        title:"Noticias",
        icon: <News />,
        link: "/news"
    },
    {
        title:"Fase Final",
        icon: <Done />,
        link: "/cuadroFinal"
    },
    {
        title:"Jugadores",
        icon: <People />,
        link: "/jugadores"
    }
]


