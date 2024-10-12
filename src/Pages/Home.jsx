import { Navbar, Card, Container, Nav, NavDropdown } from "react-bootstrap";
import NavBar from "../Components/NavBar/NavBar";
import Stack from 'react-bootstrap/Stack';
import VideoSlider from "../Components/VideoSlider";
import NewLaunch from "../Components/NewLaunch";


const Home = () => {
    return (
        <div>
            {/* <NavBar /> */}
            <div>
            <NavBar />
            <video autoPlay loop muted id="video" style={{width:"100%"}}>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
          
            </div>
            {/* <VideoSlider /> */}
            {/* <Container> */}
                
                <div style={{ height: '200px', backgroundColor: '#0fb2ae' }}></div>
            {/* </Container> */}
            {/* <Container>
                <h1 style={{ marginLeft: '15px' }}> New Launch</h1>
                <NewLaunch /> */}
                {/* <div class="container-xl" style={{ height: '300px', border: "solid" }}>100% wide until extra large breakpoint</div> */}
            {/* </Container> */}
        </div>

    )
}

export default Home;