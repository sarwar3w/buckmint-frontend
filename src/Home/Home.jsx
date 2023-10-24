import "../styles/pages/Home/Home.scss";
import gradient from "../assets/img/Gradient.svg";
const Home = () => {
  return (
    <div className='overlay'>
      <img src={gradient} alt='gradient' className='home_gradient' />
    </div>
  );
};

export default Home;