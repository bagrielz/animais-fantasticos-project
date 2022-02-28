// Fetch bitcoin
export default function initFetchBitcoin(url, target) {
  async function fetchBitcoin() {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJson = await bitcoinResponse.json();
      const btcValue = document.querySelector(target);

      btcValue.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  fetchBitcoin("https://blockchain.info/ticker");
}
