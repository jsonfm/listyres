import { Icon } from "@iconify/react";

// interface RestaurantCardProps {
//     restaurant?: unknown;
// }

export const RestaurantCard = () => {
    return (
        <div className="w-full flex flex-col items-center text-white max-w-[1000px] ">
            <div className="w-full">
                <h4 className="text-2xl font-bold mb-2"> Restaurant Name </h4>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, doloremque ...
                </p>
                <div className="flex items-end gap-2 my-5">
                    <Icon icon="carbon:location-filled" fontSize={30} />
                    <p className="font-bold">Av. de los paltas</p>
                </div>
            </div>
            <div className="h-64 w-full flex  gap-4 overflow-x-scroll overscroll-x-auto py-2">
                <div className="border-4 min-w-[300px] w-64 md:w-1/3 rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
