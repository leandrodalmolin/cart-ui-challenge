/**
 * Product Data
 *
 * NOTE:
 * - Using this simple object due to the project's simplicity
 * - Vuex should be used to manage state in bigger projects
 */
import RangeRoverImage from "@/assets/images/rangerover.jpg";
import RangeRoverImageLowRes from "@/assets/images/rangerover-500w.jpg";

export default {
  title: 'Range Rover',
  details: [
    '2017',
    '4x4',
    '3.0L Diesel 258HP'
  ],
  price: 24500,
  colors: [
    'black',
    'red',
    'white',
    'blue',
  ],
  image: {
    src: {
      highres: RangeRoverImage,
      lowres: RangeRoverImageLowRes,
    },
    alt: 'Range Rover picture'
  }
}