import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
    selectNewDisney,
    selectOriginals,
    selectRecommended,
    selectTrending,
    setMovie,
} from '../../features/movies/movieSlice';
import { selectUserName } from '../../features/user/userSlice';
import { db } from '../../firebase';

let recommends = [];
let newDisneys = [];
let originals = [];
let trendings = [];
function LoadData() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            // eslint-disable-next-line array-callback-return
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends.push({ id: doc.id, ...doc.data() });
                        break;
                    case 'new':
                        newDisneys.push({ id: doc.id, ...doc.data() });
                        break;
                    case 'original':
                        originals.push({ id: doc.id, ...doc.data() });
                        break;
                    case 'trending':
                        trendings.push({ id: doc.id, ...doc.data() });
                        break;
                    default:
                        break;
                }
            });
            dispatch(
                setMovie({
                    recommends: recommends,
                    newDisney: newDisneys,
                    originals: originals,
                    trending: trendings,
                })
            );
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userName]);
}

function ListRecommends() {
    LoadData();
    return useSelector(selectRecommended);
}
function ListNewDisney() {
    LoadData();
    return useSelector(selectNewDisney);
}
function ListOriginals() {
    LoadData();
    return useSelector(selectOriginals);
}
function ListTrendings() {
    LoadData();
    return useSelector(selectTrending);
}

export {
    ListTrendings,
    ListRecommends,
    ListNewDisney,
    ListOriginals,
    LoadData,
};
