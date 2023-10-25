import {reviews} from "../constants";

import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center text-4xl font-bold">
                What our&nbsp;
                <span className="text-coral-red">Customer&nbsp;</span>
                Say&#63;
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center">
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us&#46;
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;
