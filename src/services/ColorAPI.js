import API from "./API";

export default {
    getScheme(color) {
        return API('https://www.thecolorapi.com/').get(`scheme?hex=${color}&mode=monochrome&count=3`)
    }
}