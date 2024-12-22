import React from "react";


const reviews = [
    {
      name: "Emily Williams",
      stars: 5,
      comment: "Absolutely thrilled with my purchase! The quality is top-notch, and the customer service was amazing. 😍 I will definitely be shopping here again!",
    },
    {
      name: "Michael Brown",
      stars: 4,
      comment: "Had a fantastic experience overall! The product was as described, and shipping was quick. 🚚 Only minor issue was packaging, but still great!",
    },
    {
      name: "Olivia Green",
      stars: 3,
      comment: "The products were good, but I feel the website could use some improvements. Still, I would recommend it to others! 👍",
    },
    {
      name: "Ethan Clark",
      stars: 4,
      comment: "Super happy with my order! The quality exceeded expectations, but the delivery time could be better. 🕒 Overall, a good experience!",
    },
    {
      name: "Sophia Davis",
      stars: 5,
      comment: "Amazing! I love my new outfit, and the jewelry is beautiful. 💎 The entire shopping experience was seamless from start to finish.",
    },
  ];
  

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <i
          key={index}
          className={`fa fa-star ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        ></i>
      ))}
    </div>
  );
};

const CustomerReviews = () => {
  return (
    <section id="reviews" className="bg-gray-100 py-12 ">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold">Customer Reviews</h2>
      <p className="text-gray-600">What our clients say about us</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white p-6 shadow-md rounded-lg text-center"
        >
          <h3 className="text-lg font-semibold">{review.name}</h3>
          <StarRating rating={review.stars} />
          <p className="text-gray-600 mt-4">{review.comment}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default CustomerReviews;
