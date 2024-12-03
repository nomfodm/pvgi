import axios from "axios";
import {Pair} from "../types.tsx";
import store from "../store.tsx";
import {pairsStateActions} from "../store/pairs.tsx";

class PairsService {
    async retrieve() {
        const url = import.meta.env.VITE_PAIRS_STORAGE_URL;
        
        try {
            const response = await axios.get<Pair[]>(url, {params: {time: new Date().getTime()}});

            store.dispatch(pairsStateActions.retrievePairs(response.data));
        } catch (e) {
            store.dispatch(pairsStateActions.clear())
            store.dispatch(pairsStateActions.setError("Произошла ошибка"));
            console.error(e)
        }
    }
}

const pairsService = new PairsService();
export default pairsService;