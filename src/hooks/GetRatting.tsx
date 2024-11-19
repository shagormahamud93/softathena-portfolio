import React from "react";
interface rattingType {
  averageRating?: number;
}
const GetRatting = ({ averageRating }: rattingType) => {
  const getRating = (ratingsNum: number) => {
    const roundedRatings = Math.floor(ratingsNum);
    const isHalfStar = ratingsNum % 1 !== 0;

    const emptyRatingCount = 5 - roundedRatings - (isHalfStar ? 1 : 0);
    const ratings = [];

    for (let i = 0; i < roundedRatings; i++) {
      ratings.push(<i className="icon-star" key={`l-${i}`}></i>);
    }

    if (isHalfStar) {
      ratings.push(<i className="icon-star" key="half-star"></i>);
    }

    for (let i = 0; i < emptyRatingCount; i++) {
      ratings.push(<i className="icon-star" key={`p-${i}`}></i>);
    }

    return ratings;
  };
  return <>{averageRating !== undefined && getRating(averageRating)}</>;
};

export default GetRatting;

// uses example : <GetRatting averageRating={5} />
