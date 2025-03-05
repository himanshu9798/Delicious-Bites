import React, { Component } from "react";
import Axios from "axios";

class ClassAxios extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }
  componentDidMount() {
    Axios.get("https://dummyjson.com/recipes")
      .then((res) => {
        console.log(res.data.recipes);
        this.setState({ recipes: res.data.recipes });
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  render() {
    const { recipes } = this.state;

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {recipes.map((value) => {
          return (
            <>
              <div
                style={{
                  border: "2px solid gray",
                  width: "300px",
                  height: "auto",
                  margin: "10px",
                  borderRadius: "10px",
                  textShadow: "1px 1px gray",
                  boxShadow: "10px,0,15px gray",
                }}
              >
                <img
                  style={{ width: "100%", borderRadius: "10px" }}
                  src={value.image}
                  alt=""
                ></img>

                <h3
                  style={{
                    color: "white",
                    backgroundColor: "violet",
                    height: "60px",
                  }}
                >
                  {value.id}.{value.name}
                </h3>

                <ul>
                  <h3>🔪Ingredients:</h3>

                  <li>{value.ingredients[0]}</li>
                  <li>{value.ingredients[1]}</li>
                  <li>{value.ingredients[2]}</li>
                  <li>{value.ingredients[3]}</li>
                  <li>{value.ingredients[4]}</li>
                  <li>{value.ingredients[5]}</li>
                </ul>
                <h1>Instructions:-</h1>
                <div
                  style={{
                    width: "100%",
                    height: "150px",
                    overflow: "scroll",
                    scrollSnapStop: "stop",

                    scrollbarWidth: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {value.instructions}
                </div>

                <details>
                  <summary style={{ listStyle: "none", cursor: "pointer" }}>
                    <h3
                      style={{
                        backgroundColor: "gray",
                        padding: "0px !important",
                        textAlign: "center",
                      }}
                    >
                      Other Details
                    </h3>
                  </summary>
                  <ul>
                    <li>Time To Prepare: {value.prepTimeMinutes} min</li>
                    <li>Time To cook: {value.cookTimeMinutes} min</li>
                    <li>Calories Preserving: {value.caloriesPerServing}</li>
                    <li>Cuisine: {value.cuisine}</li>
                    <li>MealType: {value.mealType}</li>
                    <li>Tags:</li>
                    <ul>
                      <li>{value.tags[0]}</li>
                      <li>{value.tags[1]}</li>
                    </ul>
                  </ul>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px",
                      marginLeft: "2%",
                      marginRight: "2%",
                    }}
                  >
                    <p>Rating:{value.rating}</p>
                    <p>Review:{value.reviewCount}</p>
                  </div>
                </details>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default ClassAxios;
