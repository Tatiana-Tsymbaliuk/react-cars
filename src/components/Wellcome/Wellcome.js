import hero from '../../icons/carWellcome.png';
import '../Wellcome/Wellcome.css';

const Wellcome = () => {
  return (
    <div className="wellcomeContainer">
      <h1 className="wellcomeTitle">СAR RENTAL IN UKRAINE</h1>
      <h2 className="wellcomeInfo">
        On the homepage of our company, we offer you to find the best car for
        your journey. Whether you are planning a city break or an outdoor
        adventure, we have a wide selection of cars of various classes and
        configurations.
        <br />
        Our company cares about your comfort and safety. We offer the latest
        cars with a high level of safety and comfort, always ready for trips in
        any weather conditions.
        <br />
        Our car rental service is easy to use. You can quickly find the car you
        need, choose a convenient date and time, and enjoy your journey.We offer
        competitive prices and a flexible rental system.
        <br />
        Choose our company for car rental and enjoy maximum comfort and freedom
        during your journey!
      </h2>
      <div className="wellcomeImgContainer">
        <img className="wellcomeImg" src={hero} alt="wellcome" />
      </div>
    </div>
  );
};
export default Wellcome;
