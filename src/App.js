import "./App.css";
import Header from "./Header";
import Twitter from "./Twitter";

function App() {
  const tweets = [
    {
      header: "First HEadeR",
      text:
        "Unde qui vel libero dolorem ab omnis molestiae. Totam vel quis iusto est vel consequatur sapiente maiores exercitationem. Molestiae exercitationem veniam quia iste ut optio. Illo dicta explicabo impedit voluptas nihil similique exercitationem molestiae. Magni exercitationem itaque facere ut dignissimos sit sit nesciunt. Debitis tempora eligendi officia labore.",
      imageURL: "http://lorempixel.com/640/480/cats",
      retweets: Math.round(Math.random() * 100),
    },
    {
      header: "Secound HEadeR",
      text:
        "Aperiam est nulla quam dicta expedita. Ut optio inventore aut eligendi corporis. Molestias fuga aperiam sunt eaque et. Impedit distinctio ex et velit ratione et. Vero incidunt quia tenetur beatae dicta perspiciatis qui.",
      imageURL: "http://lorempixel.com/640/480/business",
      retweets: Math.round(Math.random() * 100),
    },
    {
      header: "Third HEadeR",
      text:
        "Earum blanditiis cupiditate explicabo officia corporis saepe. Sed ipsa est deserunt provident id non praesentium accusamus quo. Et distinctio tenetur iste dolores perspiciatis dolorum ex eum. Magni sint sed similique in dignissimos tenetur recusandae temporibus.",
      imageURL: "http://lorempixel.com/640/480/city",
      retweets: Math.round(Math.random() * 100),
    },
    {
      header: "FourTh HEadeR",
      text:
        "Aliquid qui pariatur asperiores impedit. Numquam ducimus quia rerum et ut praesentium ut natus. Corporis in ut sed necessitatibus perferendis aut illum. Est cum non quibusdam eum dicta qui cumque. Et dolores aliquam cupiditate possimus cum quia aut. Voluptas adipisci id eum quae deserunt.",
      imageURL: "http://lorempixel.com/640/480/animals",
      retweets: Math.round(Math.random() * 100),
    },
  ];

  return (
    <div className="app">      
      <Header />
      {tweets.map((value) => {
        return (
          <Twitter
            header={value.header}
            text={value.text}
            imageUrl={value.imageURL}
            retweets={value.retweets}
          />
        );
      })}
    </div>
  );
}

export default App;
