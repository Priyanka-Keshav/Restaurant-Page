import React, { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [image, setImage] = useState(
    "https://logosmarcas.net/wp-content/uploads/2020/11/Swiggy-Logo-650x366.png"
  );
  //const [items, setItems] = useState([""]);
  const front = () => {
    {
      setImage(
        "https://th.bing.com/th/id/R.2d79f329c9783d5401a011817db61773?rik=QaQQ2BWycXKBMA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1135465%2fimages%2fo-RESTAURANT-MEALS-CALORIES-facebook.jpg&ehk=d2Nx39dubpy5AMS1gdVqPouDG9INsuddWNRUJdzea40%3d&risl=&pid=ImgRaw&r=0"
      );
    }
  };
  const back = () => {
    setImage(
      "https://www.thedailymeal.com/img/gallery/cant-decide-on-a-dinner-order-stick-to-the-restaurants-theme/intro-1675875160.jpg"
    );
  };

  const image_set = [
    "https://i0.wp.com/imageio.forbes.com/specials-images/imageserve/62fe3a28c22bf8624fce7c7a/0x0.jpg?format=jpg&width=1200",
    "https://th.bing.com/th/id/R.2d79f329c9783d5401a011817db61773?rik=QaQQ2BWycXKBMA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1135465%2fimages%2fo-RESTAURANT-MEALS-CALORIES-facebook.jpg&ehk=d2Nx39dubpy5AMS1gdVqPouDG9INsuddWNRUJdzea40%3d&risl=&pid=ImgRaw&r=0",
    "https://www.thedailymeal.com/img/gallery/cant-decide-on-a-dinner-order-stick-to-the-restaurants-theme/intro-1675875160.jpg",
    "https://th.bing.com/th/id/R.2d79f329c9783d5401a011817db61773?rik=QaQQ2BWycXKBMA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1135465%2fimages%2fo-RESTAURANT-MEALS-CALORIES-facebook.jpg&ehk=d2Nx39dubpy5AMS1gdVqPouDG9INsuddWNRUJdzea40%3d&risl=&pid=ImgRaw&r=0",
    "https://handluggageonly.co.uk/wp-content/uploads/2015/10/Paris-Restaurants-with-cool-views-7.jpg",
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (i >= 4) {
        setI(0);
        setImage(image_set[i]);
      } else if (i < 4) {
        setI(i + 1);
        setImage(image_set[i]);
      }
    }, 3000);
    return () => clearInterval(timer);
  });
  return (
    <>
      <div className="flex justify-center h-screen">
        {" "}
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            height: "550px",
            width: "100%",
          }}
        >
          {" "}
          <i
            class="fa-solid fa-caret-left text-6xl absolute top-1/2 left-0"
            onClick={back}
          ></i>
          <div className="absolute top-1/2 left-1/2 right-1/2 text-white">
            <p
              className="flex flex-wrap text-8xl font-extrabold
"
            >
              ORDER FOOD ON SWIGGY
            </p>
          </div>
          <i
            class="fa-solid fa-caret-right text-6xl absolute top-1/2 right-0"
            onClick={front}
          ></i>
        </div>
      </div>
    </>
  );
}

export default Home;
