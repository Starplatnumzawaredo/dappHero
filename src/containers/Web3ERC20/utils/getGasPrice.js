import axios from "axios"

const getGasPrice = async () => {
let url = 'https://www.etherchain.org/api/gasPriceOracle';

try {
  let {data: gasData} = await axios.get(url);
  console.log("Oracle gas price: ", gasData);
  return gasData.fast * 1e9;
} catch (error) {
  console.log("Error with gas Oracle")
  return null
}

}

export default getGasPrice;