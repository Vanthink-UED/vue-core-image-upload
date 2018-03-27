export default {
  getLocalData(key) {
    let data = '';
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
