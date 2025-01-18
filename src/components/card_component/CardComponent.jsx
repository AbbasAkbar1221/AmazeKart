import React from "react";
import {card_components_items} from '../../data/components'
import { Link } from "react-router-dom";

const Card = ({ heading, images, hyperlink }) => {
    return (
        <div className="p-4 border border-gray-300 rounded-lg bg-white shadow-md text-left">

            <h2 className="text-lg font-medium mb-4">{heading}</h2>
            
            <div
                className={`grid ${
                    images.length === 1
                        ? "grid-cols-1"
                        : images.length === 2
                        ? "grid-cols-2"
                        : "grid-cols-2"
                } gap-2`}
            >
                {images.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center ${
                            images.length < 4 ? "col-span-2" : ""
                        }`}
                    >
                        <img
                            src={item.img}
                            alt={item.subHeading || item.deal}
                            className={`${
                                images.length === 1
                                    ? "w-full h-48"
                                    : images.length === 2
                                    ? "w-full h-36"
                                    : "w-full h-24"
                            } object-cover rounded-md`}
                        />
                        <p className="text-sm font-light mt-1">
                            {item.subHeading || item.deal || ""}
                        </p>
                    </div>
                ))}
            </div>

            <a
                href="/"
                className="text-blue-500 text-sm font-medium mt-4 inline-block hover:underline"
            >
                {hyperlink}
            </a>
        </div>
    );
};

const CardComponent = () => {
    return (
        <div className="grid grid-cols-4 gap-6 p-6 bg-gray-50">
            {card_components_items.map((item, index) => (
                <Link to='products'>
                <Card 
                    key={index} 
                    heading={item.heading} 
                    images={item.images} 
                    hyperlink={item.hyperlink} 
                />
                </Link>
            ))}
        </div>
    );
};

export default CardComponent;