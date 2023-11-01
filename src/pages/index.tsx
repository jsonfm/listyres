import { RestaurantCard } from "../components/Restaurant/Card";
import { Icon } from "@iconify/react";
import data from "../data/data.json";

const Home = () => {
    const colors = ["bg-rose-600", "bg-zinc-800", "bg-lime-600", "bg-zinc-800", "bg-orange-600"];
    return (
        <>
            <div className="fixed right-4 bottom-12">
                <div className="w-8 h-8 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Icon icon="ep:arrow-up-bold" />
                </div>
            </div>
            {data?.map((restaurant, index: number) => {
                const i = index;
                const n = colors.length;
                const color = colors[((i % n) + n) % n];
                return (
                    <section className={`h-screen ${color}`} key={`r-${index}`}>
                        <div className="container flex flex-col items-center justify-center h-full">
                            <RestaurantCard restaurant={restaurant} />
                        </div>
                    </section>
                );
            })}
        </>
    );
};

export default Home;
