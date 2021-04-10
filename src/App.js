
import './App.css';
import React ,{useState,useEffect} from "react";
import {getCountries} from "./api/api"
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InfoCountries from "./components/InfoCountries.jsx";

const useStyles = makeStyles({
    root: {
display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around"

        },

    list:{

        display:"flex",
        flexDirection:"column",
        alignItems:"center",

    }
});
function App() {
    const classes = useStyles();
    const [countries, setCountries] = useState([]);
    const [country,setCountry] = useState("")

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        const countries = await getCountries();
        setCountries(countries);
    },[])



    return (

        <React.Fragment>



            <Container className={classes.root} maxWidth="lg">
                <Autocomplete
                    id="combo-box-demo"

                    country={country}
                    onChange={event => setCountry(event.target.innerHTML)}

                    options={countries}
                    getOptionLabel={(countries) => countries.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Select Country" variant="outlined" />}
                />


<div className={classes.list}>

    {!country ? (
        <List subheader={<ListSubheader>Countries</ListSubheader>} className={classes.list}>
            <Divider light/>

            {countries.map(country =>(
                <ListItem button>

                    <ListItemText key={country.alpha2Code} primary={country.name} />

                </ListItem>

            ))}




        </List>
    ) :

       <InfoCountries country={country} />
   }


</div>







            </Container>
        </React.Fragment>



  );
}

export default App;






