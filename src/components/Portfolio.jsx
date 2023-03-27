import foto1 from ".././assets/asset 42.jpeg";
import foto2 from ".././assets/asset 40.jpeg";
import foto3 from ".././assets/asset 38.jpeg";

function Portfolio() {
return (
<section className="sectionPort" id="portfolio">
    <div classname="container-md">
        <h3 className="text-center textPort">My Portfolio</h3>
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <img src={foto1} alt="" className="foto1" />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <img src={foto2} alt="" className="foto2" />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <img src={foto3} alt="" className="foto3" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);
}

export default Portfolio;