import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

export default function Sample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/kritik")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/api/kritik/${id}`)
      .then((res) => {
        console.log(res);
        alert("Admin berhasil dihapus");
        window.location.reload();
        setData(data.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="content-wrapper">
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Daftar Kritik dan Saran</h4>
                <p className="card-description">
                  {" "}
                  Add className <code>.table</code>
                </p>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Kritik</th>
                        <th>Saran</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.length > 0 ? (data.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.kritik}</td>
                        <td>
                          {item.saran}
                        </td>
                        <td>
                              {/* <button className='btn btn-success mr-3 rounded text-white'>
                              <Link href={`/admin/editAdmin?id=${pelanggan.id}&username=${pelanggan.username}&nama=${pelanggan.nama}&passwrod=${pelanggan.password}`}
                            >
                              Edit
                            </Link>
                              </button> */}
                                <button
                                  className="btn btn-danger ml-3 rounded text-white"
                                  onClick={() => handleDelete(item.id)}
                                >
                                  <i className="far fa-edit mr-1" />
                                  Delete
                                </button>
                              </td>
                      </tr>
                      ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center">
                            Data Kosong
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
