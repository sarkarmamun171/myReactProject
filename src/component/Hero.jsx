
const Hero = (props) => {
    return (
        <div>
            {/* <h1>{props.title}</h1>
            <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" /> */}

            <ul>
                <li>Name:{props.Item['name']}</li>
                <li>Name:{props.Item['age']}</li>
            </ul>

        </div>
    );
};

export default Hero;