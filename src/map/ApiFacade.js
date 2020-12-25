let URL = "http://46.101.217.16:4000/";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  function getDownload() {
    fetch(URL + "/recipe/" + rec).then(handleHttpErrors);
  }

  return {
    getDownload,
  };
}

const returnValue = apiFacade();
export default returnValue;
