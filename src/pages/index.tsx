import { RestaurantCard } from "../components/Restaurant/Card";

const Home = () => {
    return (
        <>
            <section className="h-screen bg-rose-500">
                <div className="container flex flex-col items-center justify-center h-full">
                    <RestaurantCard />
                </div>
            </section>
            <section className="h-screen bg-zinc-800">
                <div className="container flex flex-col items-center justify-center h-full">
                    <RestaurantCard />
                </div>
            </section>
            <section className="h-screen bg-lime-600">
                <div className="container flex flex-col items-center justify-center h-full">
                    <RestaurantCard />
                </div>
            </section>
            <section className="h-screen bg-zinc-800">
                <div className="container flex flex-col items-center justify-center h-full">
                    <RestaurantCard />
                </div>
            </section>
            <section className="h-screen bg-orange-600">
                <div className="container flex flex-col items-center justify-center h-full">
                    <RestaurantCard />
                </div>
            </section>
        </>
    );
};

export default Home;
