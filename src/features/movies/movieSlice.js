import { createSlice } from '@reduxjs/toolkit';

const initialStateMovie = {
    recommends: null,
    newDisney: null,
    originals: null,
    trending: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        ...initialStateMovie,
    },
    reducers: {
        setMovie: (state, action) => {
            state.recommends = action.payload.recommends;
            state.newDisney = action.payload.newDisney;
            state.originals = action.payload.originals;
            state.trending = action.payload.trending;
        },
    },
});

export const { setMovie } = movieSlice.actions;
export const selectRecommended = (state) => state.movies.recommends;
export const selectNewDisney = (state) => state.movies.newDisney;
export const selectOriginals = (state) => state.movies.originals;
export const selectTrending = (state) => state.movies.trending;

export default movieSlice;
