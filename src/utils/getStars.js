import oneStars from "../assets/icons/1-star.png";
import twoStars from "../assets/icons/2-star.png";
import threeStars from "../assets/icons/3-star.png";
import fourStars from "../assets/icons/4-star.png";
import fiveStars from "../assets/icons/5-star.png";

export const getStars = (rating) => {
  let imgSrc = "";

  switch (rating) {
    case 0:
      break;
    case 1:
      imgSrc = oneStars;
      break;
    case 2:
      imgSrc = twoStars;
      break;
    case 3:
      imgSrc = threeStars;
      break;
    case 4:
      imgSrc = fourStars;
      break;
    case 5:
      imgSrc = fiveStars;
      break;
    default:
      break;
  }

  return imgSrc;
};
