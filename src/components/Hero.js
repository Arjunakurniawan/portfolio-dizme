import avatar from ".././assets/Foto2.png";
import {
  TiktokFill,
  GithubFill,
  LinkedinBoxFill,
  FacebookFill,
} from "akar-icons";

function Hero() {
  return (
    <section className="sectionHero">
      <div className="container-md">
        <div className="row">
          <div className="col-md-6 mt-5">
            <p className="perkenalan">Hallo, I am</p>
            <h3>Arjuna Kurniawan</h3>
            <p className="devisi">
              Front End <span className="text1">Developer</span>
              <span className="text2"> Newbie</span>
            </p>
            <p className="deskripsi">
              I'm a front end developer who is learning, and I want to achieve
              all of that to get to start up
            </p>
            <button className="btn btn-primary">Contact Me</button>
            <TiktokFill
              strokeWidth={2}
              size={20}
              style={{ margin: "9px", cursor: "pointer" }}
            />
            <GithubFill
              strokeWidth={2}
              size={20}
              style={{ margin: "9px", cursor: "pointer" }}
            />
            <LinkedinBoxFill
              strokeWidth={2}
              size={20}
              style={{ margin: "9px", cursor: "pointer" }}
            />
            <FacebookFill
              strokeWidth={2}
              size={20}
              style={{ margin: "9px", cursor: "pointer" }}
            />
          </div>
          <div className="col-md-6 pd">
            <img src={avatar} alt="ava" className="ava" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
