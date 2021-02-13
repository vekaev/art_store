import {useQuery} from "@apollo/client";
import {onePaintingQuery} from "../queries/queries";

export const getInfo = (paintingArray, cartArray, id) => {
    const painting = paintingArray.find((item) => item.id === id);
    const checkForExistinCart = cartArray.find((item) => item.id === id);

    return []
}

// const fetchPaintingsFromLocalStorage = () => {
//     const {loading, error, data} = useQuery(onePaintingQuery, {
//         variables: {id: pictureId},
//     });
// }
