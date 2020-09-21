export const asyncLocalStorage = {
  setItem: (key, value) => {
    return Promise.resolve().then(() => {;
      const serialized= JSON.stringify(value)
      localStorage.setItem(key, serialized);
      return true;
    });
  },
  getItem: key => {
    return Promise.resolve().then(() => {
     try {
      const data = localStorage.getItem(key);
      // localStorage.removeItem(key)
      return  JSON.parse(data);
     } catch (error) {
       console.log(error);
     }
    });
  },
  removeItem: key => {
    return Promise.resolve().then(() => {
      localStorage.removeItem(key);
      return true;
    });
  }
};