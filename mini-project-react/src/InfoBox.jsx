import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INIT_URL= "https://images.unsplash.com/photo-1701441919616-306b27628db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bm55JTIwc2t5fGVufDB8fDB8fHww";

    const SUNNY_URL= "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL= "https://images.unsplash.com/photo-1542801205-5240aa78e9d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW55JTIwZGF5fGVufDB8fDB8fHww";
    const COLD_URL= "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8fHww";
    return (
        <div className="infobox">
        <div className="Cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
         sx={{ height: 140 }}
         image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? SUNNY_URL : COLD_URL}
         title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? 
            <ThunderstormIcon/>: info.temp > 15 
            ? <SunnyIcon/>: <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
             <p>Temperature = {info.temp}&deg;C</p>
             <p>humidity = {info.humidity}</p>
             <p>Wind = {info.wind}</p>
             <p>Minimum Temperature = {info.tempmin}</p>
             <p>Maximum Temperature = {info.tempmax}</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels
                 like {info.feelslike}&deg;c
              </p>
          </Typography>
        </CardContent>
      </Card>
      </div>
     </div>
    );
}