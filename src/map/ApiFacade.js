let URL = "http://localhost:8080/jp/api/";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  function getDownload() {
    console.log("nu downloader de");
    fetch(URL + "/get/").then(handleHttpErrors);
  }

  return {
    getDownload,
  };
}

const returnValue = apiFacade();
export default returnValue;
