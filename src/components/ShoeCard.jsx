import {Fragment} from "react";

const ShoeCard = ({imgURL, bigShoeImage, changeBigShoeImage}) => {
    const handleClick = () => {
        if (bigShoeImage !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    };

    return (
        <Fragment>
            <div
                className={`
                    border-2 rounded-xl
                    ${
                        bigShoeImage === imgURL.bigShoe
                            ? "border-coral-red"
                            : "border-transparent"
                    }
                    cursor-pointer max-sm:flex-1
                `}
                onClick={handleClick}>
                {/*  */}

                {/* CHILD DIV */}

                <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                    <img
                        src={imgURL.thumbnail}
                        width={127}
                        height={103}
                        className="object-contain"
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default ShoeCard;
