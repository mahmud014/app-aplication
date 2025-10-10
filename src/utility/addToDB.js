import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

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

  storedAppData.push(id);
  const app = JSON.stringify(storedAppData);
  localStorage.setItem("installApps", app);
  MySwal.fire({
    icon: "success",
    title: "Installed!",
    text: "App has been installed successfully!",
  });
};
const removeFromStoredDB = (id) => {
  const storedApps = JSON.parse(localStorage.getItem("installApps")) || [];
  const updated = storedApps.filter((appId) => Number(appId) !== Number(id));
  localStorage.setItem("installApps", JSON.stringify(updated));
};

export { addToStoredDB, getStoredApp, removeFromStoredDB };
