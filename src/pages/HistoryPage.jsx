import axios from "axios";
import { History } from "../components/History";
import { ClearButton } from "../components/ClearButton";
import { MAIN_API } from "../dbConnect/dbConnect";

export const HistoryPage = () => {
    const clearHistory = async () => {
        console.log('clicked')
        try{
            const response = await axios.post(`${MAIN_API}/history/delete`)
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