/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react";

interface RestaurantCardProps {
    restaurant?: any;
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
    return (
        <div className="w-full flex flex-col items-center text-white max-w-[1000px] ">
            <div className="w-full">
                <h4 className="text-2xl font-bold mb-2"> {restaurant?.name} </h4>

                <div className="flex items-center gap-2 my-5 hover:scale-105 duration-200 cursor-pointer">
                    <Icon icon="carbon:location-filled" fontSize={20} />
                    <p className="font-bold capitalize">{restaurant?.full_address}</p>
                    <Icon icon="mingcute:arrow-right-fill" className="animate-bounce" />
                </div>
            </div>
            <div className="h-64 w-full flex  gap-4 overflow-x-scroll overscroll-x-auto py-2">
                <div className="border-4 min-w-[300px] w-64 md:w-1/3 rounded-lg overflow-hidden">
                    <img
                        src={restaurant?.photo}
                        alt="image"
                        className="w-full h-full object-cover hover:scale-105 hover:rotate-3 duration-200"
                    />
                </div>
                <div className="border-4 min-w-[300px] w-64 md:w-1/3 rounded-lg overflow-hidden">
                    <img
                        src={restaurant?.street_view}
                        alt="image"
                        className="w-full h-full object-cover hover:scale-105 hover:rotate-3 duration-200"
                    />
                </div>
                <div className="border-4 min-w-[300px] w-64 md:w-1/3 rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="image"
                        className="w-full h-full object-cover hover:scale-105 hover:rotate-3 duration-200"
                    />
                </div>
            </div>
            <div className="w-full mt-4">
                <div className="flex gap-4 mt-4">
                    <div className="">
                        <Icon icon="ri:whatsapp-fill" fontSize={40} />
                    </div>
                    <div>
                        <Icon icon="mdi:facebook" fontSize={40} />
                    </div>
                    <div>
                        <Icon icon="ri:instagram-fill" fontSize={40} />
                    </div>
                </div>
            </div>
        </div>
    );
};
