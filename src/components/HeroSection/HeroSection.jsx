import heroImg from "../../assets/herosection.jpg"


const HeroSection = () => {
    return (
        <div className="hero bg-base-200  rounded-lg  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={heroImg}
      className="max-w-sm rounded-lg shadow-2xl " />
    <div>
      <h1 className="text-5xl font-bold">Forest Expeditions: A Journey into Nature's Heart</h1>
      <p className="py-6 ">
      A forest expedition provides a chance to connect deeply with the environment. You might encounter vibrant wildlife, from colorful birds and insects to elusive mammals. The canopy overhead filters sunlight into a mosaic of shadows and light, creating a serene yet vibrant atmosphere. Such journeys often include activities like nature photography, birdwatching, and learning about indigenous plants and their medicinal uses.
      </p>
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div>
    );
};

export default HeroSection;