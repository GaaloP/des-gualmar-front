import axios from "axios"
const CountPage = async () => {
    const countLocatios = await axios.get("http://localhost:4000/locations")
    return "Cantidad: " + countLocatios?.data?.length;
}
export default CountPage