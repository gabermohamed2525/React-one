import Container from "../Components/re-usable Com/Container";
import SecTwo from "../Components/SecTwo";
import TourSecOne from "../Components/TourSecOne";
import TourSecThree from "../Components/TourSecThree";
import TourSecTwo from "../Components/TourSecTwo";

export default function Tournament() {
  return (
    <div>
      <TourSecOne />
      <Container>
        <br />
        <TourSecTwo />
        <SecTwo />
        <TourSecThree />
      </Container>

    </div>
  )
}
