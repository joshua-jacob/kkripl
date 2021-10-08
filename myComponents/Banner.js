import{Button,makeStyles} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { BannerData } from '../myComponents/constants/Data'

const useStyle=makeStyles({
    image:{
        width:'75%',
        height:'485px',
        marginLeft:'185px'
    }

})

const Banner =()=>{
    const classes=useStyle();
    return(
        <Carousel autoplay={true} animation="slide" navButtonsAlwaysVisible={true} cycleNavigation={true}
            navButtonsProps={{
                style:{
                    background:'#B3A123',
                    color:'white',
                    margin:'50px',
                    marginLeft:'40px',
                    marginRight:'80px',
            

                }
            }}>
            {
                BannerData.map(image => <img src={image.path} className={classes.image} alt="carouseling"></img>)
            }
        </Carousel>
    )
}

export default Banner;