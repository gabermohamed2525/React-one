import AboutSecFour from "../Components/AboutSecFour";
import AboutSecOne from "../Components/AboutSecOne";
import AboutSecThree from "../Components/AboutSecThree";
import AboutSecTwo from "../Components/AboutSecTwo";
import Container from "../Components/re-usable Com/Container";
import SecOne from "../Components/SecOne";

export default function About() {
  return (
    <div>
        <AboutSecOne />
      <Container>
        <br />
        <br />
        <SecOne />
        <AboutSecTwo />
        <AboutSecThree />
        <AboutSecFour />
      </Container>
    </div>
  )
}
