import gambar from ".././assets/asset 5.jpeg";

function contents() {
  return (
    <section className="secCon" id="about">
      <div className="container-md mt-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={gambar} alt="" className="gambar" />
          </div>
          <div className="col-md-6">
            <span>I am Front End Developer</span>
            <h1>
              Lorem ipsum dolor
              <br />
              sit amet
            </h1>
            <p className="textCon">
              Lorem ipsum dolor sit amet. Aut harum alias qui consequatur magni
              qui
              <br />
              saepe veniam. At quod velit ab fuga dolor qui saepe ullam? 33
              <br />
              voluptates magnam et voluptatum sint qui deserunt possimus eos
              <br />
              molestiae recusandae et vero officiis non sequi placeat sit
              molestiae dolor.
            </p>
            <button className="btn btn-primary">selengkapnya</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default contents;
