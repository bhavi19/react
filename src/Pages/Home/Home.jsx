import { Navbar, Card, Container, Nav, NavDropdown } from "react-bootstrap";
import NavBar from "../../Components/NavBar";
import Stack from 'react-bootstrap/Stack';
import VideoSlider from "../../Components/VideoSlider";
import NewLaunch from "../../Components/NewLaunch";


const Home = () => {
    return (
        <div>
            {/* <marquee  bgcolor="Green">
                Lastest offers here!!
            </marquee> */}
            <NavBar />
            <Container>
                <VideoSlider />
                <div class="container-xl" style={{ height: '200px', border: "solid", backgroundColor: '#0fb2ae' }}></div>
            </Container>
            <Container>
                <h1 style={{ marginLeft: '15px' }}> New Launch</h1>
                <NewLaunch />
                {/* <div class="container-xl" style={{ height: '300px', border: "solid" }}>100% wide until extra large breakpoint</div> */}
            </Container>
        </div>

    )
}

export default Home;