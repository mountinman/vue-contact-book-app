let setupLocalStorage = store => {
  let previous = localStorage.getItem("app");

  if (previous) {
    store.replaceState(JSON.parse(previous));
  }
};

const VuexLocalStorage = store => {
  setupLocalStorage(store);

  store.subscribe((mutation, state) => {
    localStorage.setItem("app", JSON.stringify(state));
  });
};

export default VuexLocalStorage;
