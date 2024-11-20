import { useLoaderData } from "react-router-dom";
import AdventureCard from "../AdventureCard/AdventureCard";


const AlllBlogs = () => {
    const adventures = useLoaderData()
    return (
        <div className="grid grid-cols-3 mt-4 w-[80%] mx-auto max-w-[1200px] gap-6 ">
              {
                    adventures.map(adventure =><AdventureCard adventure={adventure}></AdventureCard>)
                }
        </div>
    );
};

export default AlllBlogs;