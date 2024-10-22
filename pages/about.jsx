import timelineData from "./api/timeline.json";
const AboutPage = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img src="https://avatars.githubusercontent.com/u/79526063?v=4" alt="avatar" style={{ borderRadius: "100%", height: "240px" }} />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>Hello helloo!!</p>
          <p style={{ marginTop: "20px" }}>
            My name is <span style={{ fontWeight: "bold" }}>Muhammad Abiyyi Rahinda</span>, but you can just call me <span style={{ fontWeight: "bold" }}>Abik</span>, okay!
          </p>
          <p style={{ marginTop: "20px" }}>I have experience in frontend development since 2021 and expanded my skills to projects that include backend by the end of 2023.</p>
          <p style={{ marginTop: "20px" }}>You’ll often find me sipping coffee while coding away in a cozy café corner ☕✨ </p>
          <p style={{ marginTop: "20px" }}>Let's connect and create something amazing together!</p>
        </div>
        <div style={{ marginTop: "40px" }}>
          <h3 style={{ marginBottom: "20px", fontSize: "1.5rem", fontWeight: "bold" }}>Work Experience</h3>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {timelineData.map((item, index) => (
              <div
                key={index}
                style={{
                  borderLeft: "2px solid #000",
                  padding: "10px 20px",
                  marginBottom: "20px",
                  position: "relative",
                  maxWidth: "400px",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-8px",
                    top: "0",
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#000",
                    borderRadius: "50%",
                  }}
                />
                <h4 style={{ margin: "0", fontSize: "1.2rem", fontWeight: "bold" }}>{item.year}</h4>
                <p style={{ margin: "5px 0", fontSize: "1.1rem", fontWeight: "bold" }}>{item.title}</p>
                <p style={{ margin: "0", fontSize: "1rem", color: "#707070" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
