const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("installApps");
  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();

  if (storedAppData.includes(id)) {
    alert("all ready added");
  } else {
    storedAppData.push(id);
    const app = JSON.stringify(storedAppData);
    localStorage.setItem("installApps", app);
  }
};

export { addToStoredDB, getStoredApp };
