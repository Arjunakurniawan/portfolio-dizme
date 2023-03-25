import uti1 from ".././assets/asset 3.png";
import uti2 from ".././assets/asset 2.png";
import uti3 from ".././assets/asset 4.png";

function Utilities() {
  return (
    <section className="py-5">
      <div className="container-md text-center">
        <div className="row">
          <div className="col-md-4 mt-5">
            <div className="card">
              <div className="card-body">
                <img src={uti1} alt="uti1" className="uti1" />
                <h4>lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet.
                  <br />
                  Quo quis reprehenderit aut animi
                  <br /> ratione aut natus consectetur! <br /> Aut omnis debitis
                  a necessitatibus
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card">
              <div className="card-body">
                <img src={uti2} alt="uti2" className="uti2" />
                <h4>lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet.
                  <br />
                  Quo quis reprehenderit aut animi
                  <br /> ratione aut natus consectetur! <br /> Aut omnis debitis
                  a necessitatibus
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card">
              <div className="card-body">
                <img src={uti3} alt="uti3" className="uti3" />
                <h4>lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet.
                  <br />
                  Quo quis reprehenderit aut animi
                  <br /> ratione aut natus consectetur! <br /> Aut omnis debitis
                  a necessitatibus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Utilities;
