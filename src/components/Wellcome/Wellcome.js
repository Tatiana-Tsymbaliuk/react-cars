import hero from '../../icons/carWellcome.png';
import '../Wellcome/Wellcome.css';

const Wellcome = () => {
  return (
    <div className="wellcomeContainer">
      <h1 className="wellcomeTitle">СAR RENTAL IN UKRAINE</h1>
      <div className="wellcomeImgContainer">
        <img className="wellcomeImg" src={hero} alt="wellcome" />
      </div>
    </div>
  );
};
export default Wellcome;
