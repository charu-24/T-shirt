import { API } from "../../backend"
export const getProductS = () => {

    console.log("api is", API)
    return fetch(`${API}/products`, {method: "GET"})
      .then(
          response => {
              console.log(response)
              return response.json()
          }
      )
      .catch(err => console.log(err))

}