// Fetch bitcoin
export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJson = await bitcoinResponse.json();
      const btcValue = document.querySelector(".btc-value");

      btcValue.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  fetchBitcoin("https://blockchain.info/ticker");
}
