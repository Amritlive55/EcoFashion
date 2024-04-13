import React from "react";

const otherPerson = [
  {
    Name: "Sam",
    plastic: "500kg",
    index: 4,
    src: "https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A=",
  },
  {
    Name: "Anu",
    plastic: "490kg",
    index: 5,
    src: "https://www.shutterstock.com/image-photo/headshot-portrait-confident-young-indian-260nw-2021632466.jpg",
  },
  {
    Name: "kirat",
    plastic: "480kg",
    index: 6,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNaEKQxDDweE58CwtXoMF6e46kmgmVjPF4ng&usqp=CAU",
  },
  {
    Name: "Arsh",
    plastic: "400kg",
    index: 7,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnan-77r3i_euBCnMLg-4hZb3AzDIciB1VDw&usqp=CAU",
  },
  {
    Name: "Pawan",
    plastic: "370kg",
    index: 8,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2t-r7v3uF3IXpChgaqnC7s8g4XMSRt0XN-g&usqp=CAU",
  },
  {
    Name: "Manu",
    plastic: "380kg",
    index: 9,
    src: "https://media.istockphoto.com/id/1361217779/photo/portrait-of-happy-teenage-boy-at-park.webp?b=1&s=170667a&w=0&k=20&c=hOYpnliBsXaoVHh9qp4BnksjwzFn4S7i8dWQMBlQggY=",
  },
  {
    Name: "Madhav",
    plastic: "350kg",
    index: 10,
    src: "https://img.freepik.com/free-photo/smiley-man-posing-medium-shot_23-2149915893.jpg",
  },
  {
    Name: "Disha",
    plastic: "330kg",
    index: 11,
    src: "https://media.istockphoto.com/id/1490527012/photo/finding-her-peace.webp?b=1&s=170667a&w=0&k=20&c=f1aIOqLfzwHEc6VAw369oAp9u3JYj_MVW6g6hRB1e9k=",
  },
];
const LeaderboardPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#024f4f",
          padding: "10px 0",
          color: "white",
          textAlign: "center",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-around",
            padding: "0",
          }}
        >
          <li
            style={{
              cursor: "pointer",
            }}
          >
            Region
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            National
          </li>
          <li
            style={{
              cursor: "pointer",
            }}
          >
            Global
          </li>
        </ul>
      </nav>

      {/* Leaderboard */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>Leaderboard</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "300px",
              backgroundColor: "#f0f8ff",
              padding: "10px",
              margin: "10px",
              borderRadius: "5px",
            }}
          >
            <h3 style={{ color: "#024f4f", marginBottom: "10px" }}>1st</h3>
            <div style={{ marginBottom: "10px" }}>
              <img
                src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg"
                alt="Person 1"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
            </div>
            <p>
              <span
                style={{
                  color: "#024f4f",
                  textDecoration: "underline",
                  textDecorationColor: "#2E8B57",
                  textDecorationThickness: "1px",
                  cursor: "pointer",
                }}
              >
                Rahul Sharma
              </span>{" "}
              <b>- 1000 kg</b>
            </p>
          </div>
          <div
            style={{
              width: "300px",
              backgroundColor: "#f0f8ff",
              padding: "10px",
              margin: "10px",
              borderRadius: "5px",
            }}
          >
            <h3 style={{ color: "#024f4f", marginBottom: "10px" }}>2nd</h3>
            <div style={{ marginBottom: "10px" }}>
              <img
                src="https://img.freepik.com/free-photo/close-up-portrait-young-indian-man-with-beard-white-shirt-isolated-standing-smiling_155003-23823.jpg"
                alt="Person 2"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
            </div>
            <p>
              <span
                style={{
                  color: "#024f4f",
                  textDecoration: "underline",
                  textDecorationColor: "#024f4f",
                  textDecorationThickness: "1px",
                  cursor: "pointer",
                }}
              >
                Parteek
              </span>{" "}
              <b> - 800 kg</b>
            </p>
          </div>
          <div
            style={{
              width: "300px",
              backgroundColor: "#f0f8ff",
              padding: "10px",
              margin: "10px",
              borderRadius: "5px",
            }}
          >
            <h3 style={{ color: "#024f4f", marginBottom: "10px" }}>3rd</h3>
            <div style={{ marginBottom: "10px" }}>
              <img
                src="https://cdn6.f-cdn.com/files/download/38546484/28140e.jpg"
                alt="Person 3"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
            </div>
            <p>
              <span
                style={{
                  color: "#024f4f",
                  textDecoration: "underline",
                  textDecorationColor: "#024f4f",
                  textDecorationThickness: "1px",
                  cursor: "pointer",
                }}
              >
                Alice Johnson
              </span>{" "}
              <b> - 600 kg</b>
            </p>
          </div>
        </div>
        {/* Other Rankings  marginLeft: "70px" , marginRight:"200px",*/}
        <div class="container">
        <div style={{ marginTop: "20px"}}>
          <h3>Other Rankings</h3>
          <div
            style={{
              display: "block",
              justifyContent: "center",
              flexWrap: "wrap",
               marginLeft:"19rem",
            }}
          >
            {otherPerson.map((item) => (
              <div
                key={item.index}
                style={{
                  backgroundColor: "#024f4f",
                  padding: "10px",
                  margin: "10px",
                  borderRadius: "5px",
                  width: "550px",
                  textAlign: "left", // Align text content to the left
                  cursor: "pointer",
                  borderRaddius: " 50% ",
                  height: "50px",
                }}
              >
                <img
                  src={item.src}
                  alt={item.Name}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginBottom: "10px",
                    float: "left", // Move the image to the left
                    marginRight: "10px", // Add margin to separate image from text
                  }}
                />
                <div>
                  <p
                    style={{
                      color: "#f0f8ff",
                      textDecoration: "underline",
                      textDecorationColor: "#f0f8ff",
                      textDecorationThickness: "1px",
                      marginBottom: "5px",
                      marginLeft: "50px",
                    }}
                  >
                    <h3>{item.Name}</h3>
                  </p>
                  <p
                    style={{
                      float: "right",
                      color: "#f0f8ff",
                      position: "relative",
                      top: "-40px"
                    }}
                  >
                    {item.plastic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LeaderboardPage;