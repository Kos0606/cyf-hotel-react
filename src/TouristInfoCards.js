import React from "react";

const TouristInfoCards = () => {
  return (
    <div>
      {/* First card */}
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/DSCN4408_City_of_Glasgow_College_City_Campus.jpg/1280px-DSCN4408_City_of_Glasgow_College_City_Campus.jpg"
          alt="Glasgow"
        />

        <div className="card-body">
          <h4>
            <b>The City Of Glasgow</b>
          </h4>
          <p>Come and visit Glasgow in Scotland. An amazing experience!</p>
          <p>Click the link below to see more</p>
          <a
            href="https://peoplemakeglasgow.com/glasgow-now"
            className="btn btn-primary"
          >
            Explore the beautiful City of Glasgow
          </a>
        </div>
      </div>

      {/* Second card */}
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Manchester_Montage_2017.jpg"
          alt="Manchester"
        />

        <div class="card-body">
          <h4>
            <b>The City Of Manchester</b>
          </h4>
          <p>
            Come and visit Manchester in the North of England. An amazing
            experience!
          </p>
          <p>Click the link below to see more</p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Explore the beautiful City of Manchester
          </a>
        </div>
      </div>

      {/* Third card */}
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/1920px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg"
          alt="London"
        />

        <div class="card-body">
          <h4>
            <b>The City Of London</b>
          </h4>
          <p>
            Come and visit London, the Capital of England. An amazing
            experience!
          </p>
          <p>Click the link below to see more</p>
          <a href="https://visitlondon.com/" className="btn btn-primary">
            Explore the beautiful City of Manchester
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
