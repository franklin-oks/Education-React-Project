import "./About.css";
import play from "../../assets/play.png";
// import me from "../../assets/me.jpg";

const About = ({ setIsPlaying }) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img
          src="https://images.unsplash.com/photo-1719159381916-062fa9f435a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
          className="about-img"
        />
        <img
          src={play}
          alt="logo"
          className="about-img2"
          onClick={() => setIsPlaying(true)}
        />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leader's Today</h2>
        <p>
          Embark on a transformative educational journey with our universities
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands on learning, and personalizsed
          mentorship. our programs prepareaspiring educator to a meaningful
          imapct in classrooms, schools and communities.
        </p>
        <p>
          Wheather you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education
        </p>
      </div>
    </div>
  );
};
export default About;
