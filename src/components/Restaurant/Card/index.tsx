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

                <a
                    href={restaurant?.location_link}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 my-5 hover:scale-105 duration-200 cursor-pointer"
                >
                    <Icon icon="carbon:location-filled" fontSize={20} className="animate-bounce" />
                    <p className="font-bold capitalize">{restaurant?.full_address}</p>
                </a>
            </div>
            <div className="h-64 md:h-80 w-full flex  gap-4 overflow-x-scroll overscroll-x-auto py-2">
                <div className="border-4 min-w-[300px] w-full md:w-96 rounded-lg overflow-hidden">
                    <img
                        src={restaurant?.photo}
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
