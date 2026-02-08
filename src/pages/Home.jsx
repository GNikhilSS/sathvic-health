import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate();

    const takeQuiz = () => {
        navigate("/quiz")
    }

    // direct navigation to result page
    const goToResultPage = () => {
        navigate("/result", {
            state: { vataScore: 8, pittaScore: 2, kaphaScore: 5 }
        });
    };
    // remove this function after completing the development

    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center h-auto'>
                <h1>Discover your body type and bulid a healthier you</h1>
                <img src='/images/HeroImage.png' className='h-120 rounded-[500px]' />
                <h1>"Before you change your body"</h1>
                <button className='border-2 p-3 rounded-2xl m-2' onClick={takeQuiz}>Know your Body</button>
                <p>It takes less than 3 minutes</p>
            </div>

            {/* direct redirection to the result page, not to take the quiz each and every time */}
            <button onClick={goToResultPage}>
                Go to Result page(Dev mode only)
            </button>
            {/* till here this code should be removed after developing the result page */}
        </>
    )
}

export default Home
