import { Fragment, useState } from "react";
import Winner from "../Winner";
import { useImmer } from "use-immer";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";
import { current } from "immer";

const finishLine = 400;

export default function CarRace() {
  const [cars, updateCars] = useImmer(initialCars);

  // updatePerson(draft => {
  //   draft.name = name;
  // });

  // !!!!!!
  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();

    // for (let car in cars) {
    //   console.log(car, cars[car]);
    //   // if ((cars[car].emoji = clickedCar.emoji)) {
    //   //   currentCar = clickedCar.emoji;
    //   // }
    // }

    // updateSeasons((draft) => {
    //   const season = draft.find(({ number }) => number === seasonNumber);

    //   const episode = season.episodes.find(
    //     ({ number }) => number === episodeNumber
    //   );

    //   episode.hasSeen = !episode.hasSeen;

    updateCars((draft) => {
      const currentCar = draft.find(({ emoji }) => emoji === clickedCar.emoji);
      currentCar.position.x += coveredDistance;
    });
    console.log("clickedCar", clickedCar);
    console.log("coveredDistance", coveredDistance);
  }

  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        <Winner winner={winner} onRestart={() => updateCars(initialCars)} />
      ) : (
        <AllCarRoutes finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track finishLine={finishLine}>
                <CarButton
                  onClick={() => moveCar(car)}
                  positionX={car.position.x}
                  lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}

// --------------------------
// ---- Classic Syntax ------
// --------------------------

// import { Fragment, useState } from "react";
// import Winner from "../Winner";
// import {
//   CarButton,
//   AllCarRoutes,
//   DistanceHeadline,
//   Distance,
//   Track,
// } from "./CarRace.styled";
// import { initialCars, getRandomDistance } from "../../utils/utils";

// const finishLine = 400;

// export default function CarRace() {
//   const [cars, setCars] = useState(initialCars);

//   // setSeasons((prevSeasons) => {
//   //   return prevSeasons.map(season => {
//   //     if (season.number !== seasonNumber) {
//   //       return season
//   //     }
//   //     return {
//   //       ...season,
//   //       episodes: season.episodes.map(episode => {
//   //         if (episode.number !== episodeNumber) {
//   //           return episode
//   //         }
//   //         return {
//   //           ...episode,
//   //           hasSeen: !episode.hasSeen
//   //         }
//   //       })
//   //     }
//   //   })

//   // !!!!!!
//   function moveCar(clickedCar) {
//     const coveredDistance = getRandomDistance();
//     setCars((prevCars) => {
//       return prevCars.map((car) => {
//         if (car.emoji !== clickedCar.emoji) {
//           console.log("not the same", car.emoji);
//           return car;
//         } else {
//           return {
//             ...car,  // spread values of car.position if there is more stacked objects on the same level or if we want to keep a specific value
//             position: {
//               x: car.position.x + coveredDistance,
//               lastDistance: coveredDistance,
//             },
//             // position: {
//             //   x: position.x + coveredDistance,
//             //   lastDistance: coveredDistance,
//             // },
//           };
//         }
//       });
//     });
//     console.log("clickedCar", clickedCar);
//     console.log("coveredDistance", coveredDistance);
//   }

//   const winner = cars.find((car) => car.position.x >= finishLine);

//   return (
//     <>
//       {winner ? (
//         <Winner winner={winner} onRestart={() => setCars(initialCars)} />
//       ) : (
//         <AllCarRoutes finishLine={finishLine}>
//           <DistanceHeadline>Last Distance</DistanceHeadline>
//           {cars.map((car) => (
//             <Fragment key={car.emoji}>
//               <Track finishLine={finishLine}>
//                 <CarButton
//                   onClick={() => moveCar(car)}
//                   positionX={car.position.x}
//                   lastDistance={car.position.lastDistance}
//                   aria-label={`Move clicked car forward`}
//                 >
//                   {car.emoji}
//                 </CarButton>
//               </Track>
//               <Distance>{car.position.lastDistance}</Distance>
//             </Fragment>
//           ))}
//         </AllCarRoutes>
//       )}
//     </>
//   );
// }
