import { lazy, Suspense } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { Carousel } from "./carousel";
import { Loading } from "./Loading";
import "../styles/Carousel.css";

export const ConditionallyRendered = () => {
  const screenWidth = useScreenWidth();

  if (screenWidth === "xs" || screenWidth === "sm") {
    return <Carousel />;
  }

  // If screen width is md or greater (i.e. >=768px)... then lazy load the image.
  const JsCarousel = lazy(() => import("./jsCarousel"));

  return (
    <Suspense fallback={<Loading />}>
      <JsCarousel />
    </Suspense>
  );
};

// export const ConditionallyRenderedOriginal = () => {
//   const { width } = useWindowDimentions();

//   if (width < 800) {
//     return <Carousel />;
//   }

//   // If screen width is 600px or greater... then lazy load the image.
//   const JsCarousel = lazy(() => import("./jsCarousel"));

//   return (
//     <Suspense fallback="Loading.....">
//       <JsCarousel />
//     </Suspense>
//   );
// };
