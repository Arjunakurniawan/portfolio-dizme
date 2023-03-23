import avatar from ".././assets/Foto2.png";
import {
  TiktokFill,
  GithubFill,
  LinkedinBoxFill,
  FacebookFill,
} from "akar-icons";

function Hero() {
  return (
    <section>
      <div className="container-md mt-5">
        <div className="row">
          <div className="col-md-6">
            <p className="perkenalan">Hallo, I am</p>
            <h3>Arjuna Kurniawan</h3>
            <p className="devisi">
              <span className="text1">Developer</span>
              <span className="text2"> Probolinggo</span>
            </p>
            <p className="deskripsi">
              I'm a front end developer who is learning, and I want to achieve
              all of that to get to start up
            </p>
            <button className="btn btn-primary">Contact Me</button>
            <TiktokFill strokeWidth={2} size={20} style={{ margin: "9px" }} />
            <GithubFill strokeWidth={2} size={20} style={{ margin: "9px" }} />
            <LinkedinBoxFill
              strokeWidth={2}
              size={20}
              style={{ margin: "9px" }}
            />
            <FacebookFill strokeWidth={2} size={20} style={{ margin: "9px" }} />
          </div>
          <div className="col-md-6">
            <img src={avatar} alt="ava" className="ava" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
