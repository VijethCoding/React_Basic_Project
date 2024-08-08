const Herosection = () => {
  return (
    <section>
      
      <div className="leftdiv">
        <h1>YOUR FEET DESERVE<br></br>THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="buttons">
            <button className="button1">Shop now</button>
            <button className="button2">Category</button>
        </div>
        <div className="available">
            <p>Also Available On</p>
            <div className="comp-logos">
                <img src="./images/flipkart.png" alt="flipkart" />
                <img src="./images/amazon.png" alt="amazon" />

            </div>
        </div>
      </div>
      <div className="rightdiv">
        <img src="./images/shoe_image.png" alt="shoe" />
      </div>
    </section>
  );
};

export default Herosection;
