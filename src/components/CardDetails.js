import React from "react";
import "./style.css";
import { Table } from "react-bootstrap";

const CardDetails = () => {
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            <div className="items_img">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                alt=""
              />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant</strong> : Massala Theoryy
                    </p>
                    <p>
                      <strong>Price</strong> : ₹ Massala Theoryy
                    </p>
                    <p>
                      <strong>Dishes</strong> : Massala Theoryy
                    </p>
                    <p>
                      <strong>Total</strong> : ₹ Massala Theoryy
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Rating</strong> :{" "}
                      <span
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "2px 5px",
                          borderRadius: "5px",
                        }}
                      >
                        3.8 ★
                      </span>
                    </p>
                    <p>
                      <strong>Order Review</strong> : <span>3.5 ★</span>
                    </p>
                    <p>
                      <strong>Remove</strong> :{" "}
                      <span>
                        <i
                          className="fas fa-trash"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                        ></i>
                      </span>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
