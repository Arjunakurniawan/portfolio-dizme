function Contact() {
return (
<section>
    <div className="container-md" id="contact">
        <h3 className="text-center">Contact Us</h3>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Nama
            </label>
            <input className="form-control" type="text" placeholder="masukkan nama"
                aria-label="default input example" />
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Email
            </label>
            <input className="form-control" type="text" placeholder="masukkan nama"
                aria-label="default input example" />
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Telepon
            </label>
            <input className="form-control" type="text" placeholder="masukkan nama"
                aria-label="default input example" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Saran & Kritik
            </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
</section>
);
}

export default Contact;