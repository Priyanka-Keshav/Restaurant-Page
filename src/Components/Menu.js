import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cuisine } from "./Context";

function Menu() {
  const { setCuisine } = useContext(cuisine); // Destructure setCuisine from context

  const cuisne_set = (event) => {
    const selected_cuisine = event.target.innerText;
    setCuisine(selected_cuisine); // Set the selected cuisine in the context
    console.log(selected_cuisine);
  };

  return (
    <>
      <div className="h-screen">
        {" "}
        <div class="flex flex-col h-full">
          <div className="grid grid-cols-3 grid-rows-3 h-full">
            <Link to="indian">
              {" "}
              <div
                className="border-8 p-4 border-black text-center text-6xl text-white h-full "
                style={{
                  backgroundImage: `url("https://img.freepik.com/premium-photo/assorted-indian-food-black-background_756748-18780.jpg")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onClick={cuisne_set}
              >
                {" "}
                <div>Indian</div>
              </div>
            </Link>
            <Link to="indian">
              {" "}
              <div
                className="border-8 p-4 border-black text-center text-6xl text-white h-full "
                style={{
                  backgroundImage: `url("https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/l-intro-1643403830.jpg")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onClick={cuisne_set}
              >
                {" "}
                <div>Italian</div>
              </div>
            </Link>
            <Link to="indian">
              {" "}
              <div
                className="border-8 p-4 border-black text-center text-6xl text-white h-full "
                style={{
                  backgroundImage: `url("https://xyuandbeyond.com/wp-content/uploads/poutine-1024x689.jpg")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onClick={cuisne_set}
              >
                {" "}
                <div>Canadian</div>
              </div>
            </Link>
            <Link to="indian">
              {" "}
              <div
                className="border-8 p-4 border-black text-center text-6xl text-white h-full "
                style={{
                  backgroundImage: `url("https://img.freepik.com/premium-photo/tacos-with-meat-vegetables-black-background-mexican-food_856795-3169.jpg")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onClick={cuisne_set}
              >
                {" "}
                <div>Mexican</div>
              </div>
            </Link>
            <Link to="indian">
              {" "}
              <div
                className="border-8 p-4 border-black text-center text-6xl text-white h-full "
                style={{
                  backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/024/446/519/non_2x/traditional-japanese-food-dishes-on-black-background-generate-ai-free-photo.jpg")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onClick={cuisne_set}
              >
                {" "}
                <div>Japanese</div>
              </div>
            </Link>
            <Link to="indian">
              {" "}
              <div
                className="border-8 p-4 border-black text-center text-6xl text-white h-full "
                style={{
                  backgroundImage: `url("https://img.freepik.com/free-photo/top-view-fresh-delicious-chinese-food-dark-background_24972-2153.jpg?w=740&t=st=1696473208~exp=1696473808~hmac=8559daf45a6500825a8098e1b001e49c852c80c5e56fe698f0b2f58d0ddf9a7e")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onClick={cuisne_set}
              >
                {" "}
                <div>Chinese</div>
              </div>
            </Link>
            <Link to="indian">
              {" "}
              <div
                className="border-8 p-4 border-black text-center text-6xl text-white h-full "
                style={{
                  backgroundImage: `url("https://thumbs.dreamstime.com/b/spanish-paella-shrimp-cast-iron-skillet-rice-spanish-spanish-paella-shrimp-cast-iron-skillet-rice-272218652.jpg")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onClick={cuisne_set}
              >
                {" "}
                <div>Spanish</div>
              </div>
            </Link>
            <Link to="indian">
              {" "}
              <div
                className="border-8 p-4 border-black text-center text-6xl text-white h-full "
                style={{
                  backgroundImage: `url("https://image.cookly.me/images/traditional-russian-blini-pancakes-cooking-class-with-tea-ceremony_gf5ILTh.jpg")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onClick={cuisne_set}
              >
                {" "}
                <div>Russian</div>
              </div>
            </Link>
            <Link to="indian">
              {" "}
              <div
                className="border-8 p-4 border-black text-center text-6xl text-white h-full "
                style={{
                  backgroundImage: `url("https://png.pngtree.com/background/20230417/original/pngtree-burger-fast-food-cheese-food-background-picture-image_2445013.jpg")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                onClick={cuisne_set}
              >
                {" "}
                <div>American</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
