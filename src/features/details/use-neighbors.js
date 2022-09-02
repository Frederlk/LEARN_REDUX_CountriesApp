import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadNeighborsByBorders, selectNeighbors } from "./details-slice";

export const useNeighbors = (borders) => {
    const dispatch = useDispatch();
    const neighbors = useSelector(selectNeighbors);

    useEffect(() => {
        if (borders.length) {
            dispatch(loadNeighborsByBorders(borders));
        }
    }, [borders, dispatch]);

    return neighbors;
};
