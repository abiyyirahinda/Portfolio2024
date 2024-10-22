const AboutPage = () => {
  return (
    <>
      {/* <h3 className="text-red-500">A Little Bit About Me</h3> */}
      <div style={{ textAlign: "center" }}>
        {/* <div style={{ aspectRatio: "1 / 1" }}> */}
        <img src="https://avatars.githubusercontent.com/u/79526063?v=4" alt="avatar" style={{ borderRadius: "100%", height: "240px" }} />
        {/* </div> */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>Hello helloo!!</p>
          <p style={{ marginTop: "20px" }}>
            My name is <span style={{ fontWeight: "bold" }}>Muhammad Abiyyi Rahinda</span>, but you can just call me <span style={{ fontWeight: "bold" }}>Abik</span>, okay!
          </p>
          <p style={{ marginTop: "20px" }}>I have experience in frontend development since 2021 and expanded my skills to project that include backend by the end of 2023.</p>
          <p style={{ marginTop: "20px" }}>You’ll often find me sipping coffee while coding away in a cozy café corner ☕✨ </p>
          <p style={{ marginTop: "20px" }}>Let's connect and create something amazing together!</p>
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
