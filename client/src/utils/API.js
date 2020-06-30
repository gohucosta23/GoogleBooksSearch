import axios from "axios";


const APIKEY = ":keyes&key=AIzaSyAc6ydpju8wPkBW-1FE1Hld_4u6chMFa_U";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    search: function(query) {
      
      return axios.get(BASEURL + query + APIKEY);
    }
  };