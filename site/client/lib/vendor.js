export default {
  getLocalData(key) {
    let data = null;
    try {
      data = localStorage.getItem(key);
    } catch (ew) {
      console.log('Warnning: cannot get data')
    }
    return data;
  },

  setLocalData(key, data) {
    localStorage.setItem(key, data);
  }



}
