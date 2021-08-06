import axios from "axios";
import { History } from "../components/History";
import { ClearButton } from "../components/ClearButton";
import { MAIN_API } from "../dbConnect/dbConnect";

export const HistoryPage = () => {
    const clearHistory = async () => {
        try{
            const response = await axios.delete(`${MAIN_API}/history`)
            return response.data;
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <History />
            <div className="btn__container">
                <ClearButton callback={clearHistory} />
            </div>
        </div>
    )
}