import Button from "../components/Button";

import {shoe8} from "../assets/images";

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            {/* START LEFT SIDE */}
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    We Provide you{" "}
                    <span className="text-coral-red">Super </span>
                    <span className="text-coral-red">Quality </span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Ensuring premium comfort and style&#44; our meticulously
                    crafted footwear is designed to elevate your experience&#44;
                    providing you with unmatched quality&#44; innovation&#44;
                    and a touch of elegance&#46;
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Our dedication to detail and excellence ensures your
                    satisfaction
                </p>
                <div className="mt-11">
                    <Button label="View details" />
                </div>
            </div>
            {/* END LEFT SIDE */}

            {/* START RIGHT SIDE */}
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={shoe8}
                    alt="shoe8"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            </div>
            {/* END RIGHT SIDE */}
        </section>
    );
};

export default SuperQuality;
