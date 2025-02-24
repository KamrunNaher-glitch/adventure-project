import heroImg from "../../assets/herosection.jpg";

const HeroSection = () => {
    return (
        <div className="hero bg-base-200 rounded-lg p-4 md:p-8">
            <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center text-center lg:text-left">
                <img
                    src={heroImg}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl object-cover" 
                    alt="Hero"
                />
                <div className="max-w-lg">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Forest Expeditions: A Journey into Nature's Heart</h1>
                    <p className="py-4 text-sm sm:text-base md:text-lg">
                        A forest expedition provides a chance to connect deeply with the environment. You might encounter vibrant wildlife, from colorful birds and insects to elusive mammals. The canopy overhead filters sunlight into a mosaic of shadows and light, creating a serene yet vibrant atmosphere. Such journeys often include activities like nature photography, birdwatching, and learning about indigenous plants and their medicinal uses.
                    </p>
                    <button className="btn btn-primary mt-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
