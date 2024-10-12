import { Container } from "react-bootstrap";

const VideoSlider = () => {
    return (
        // <Container>
           <video autoPlay loop muted id="video" style={{width:"100%"}}>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
        // </Container>
    )
}

export default VideoSlider;