import React, { useState } from "react";
import axios from "axios";

export default function Forms() {
  const [showName, setShowName] = useState(true);
  const [data, setData] = useState([]);
    const [alamat, setAlamat] = useState('');
    const [name, setName] = useState('');
    const [kritik, setKritik] = useState('');
    const [saran, setSaran] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = {
          name: name,
          alamat: alamat,
          kritik: kritik,
          saran: saran,
      }
      console.log(data);
      try{
          const res = await axios.post('http://localhost:3002/api/kritik', data);
          console.log(res);
          alert('Order berhasil ditambahkan');
          window.location.reload('/');
          setName('');
          setAlamat('');
          setKritik('');
          setSaran('');
      }catch(error){
          console.log(error);
      }
  }

  const handleRadioChange = (event) => {
    setShowName(event.target.value === "option2");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col mb-5 pb-5">
            <div className="card mt-1 p-2">
              <div className="card-header">
                <h1>Kritik dan saran</h1>
                <p>
                  Berikan Kritik dan Saran kepada SMA Negeri 1 Rogojampi
                  dengan bahasa yang sopan dan santun
                </p>
              </div>
              <div className="col">
                <form action="#" onSubmit={handleSubmit}>
                  <div>
                    <label className="p-2" htmlFor="nama">
                      Nama
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      name="nama"
                      placeholder="Masukkan nama..."
                      disabled={showName ? false : true}
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked={!showName}
                        onChange={handleRadioChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Sembunyikan nama
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                        checked={showName}
                        onChange={handleRadioChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                      >
                        Tampilkan nama
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="p-2" htmlFor="kritik">
                      Kritik
                    </label>
                    <textarea
                      name="kritik"
                      className="form-control"
                      cols={10}
                      rows={3}
                      placeholder="Masukkan kritik..."
                      defaultValue={""}
                      value={kritik}
                      onChange={(event) => setKritik(event.target.value)}
                    />
                  </div>
                  <div>
                    <label className="p-2" htmlFor="saran">
                      Saran
                    </label>
                    <textarea
                      name="saran"
                      className="form-control"
                      cols={10}
                      rows={3}
                      placeholder="Masukkan saran..."
                      defaultValue={""}
                      value={saran}
                      onChange={(event) => setSaran(event.target.value)}
                    />
                  </div>
                  <input
                    className="btn btn-primary m-2"
                    type="submit"
                    value="Kirim"
                  />
                </form>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
