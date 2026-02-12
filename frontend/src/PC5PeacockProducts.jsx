import React, { useState } from "react";

const Product = ({
  productName,
  height,
  width,
  holes,
  parts,
  videos,
  images,
}) => {
  const [showMsg, setShowMsg] = useState(false);

  const showSuccess = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      productName,
      height,
      width,
      holes,
      parts,
      partyName: form.partyName.value,
      partyNumber: form.partyNumber.value,
      qty: form.qty.value,
      requirementDetails: form.requirementDetails.value,
      requiredDays: form.requiredDays.value,
    };

    try {
      await fetch(
        `${import.meta.env.VITE_API_URL}/api/products/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      setShowMsg(true);
      form.reset();
      setTimeout(() => setShowMsg(false), 3000);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <>
      {showMsg && (
        <div className="alert alert-success fw-bold m-2">
          ✅ Details submitted successfully
        </div>
      )}

      <div
        className="d-flex border border-dark mb-3"
        style={{ height: "350px", overflowX: "auto" }}
      >
        {/* LEFT */}
        <div
          className="border-end border-danger p-2"
          style={{ width: "40%", minWidth: "400px", overflow: "auto" }}
        >
          <form onSubmit={showSuccess}>
            <table className="table table-bordered table-sm">
              <tbody>
                <tr>
                  <td><b>Product Name</b></td>
                  <td>{productName}</td>
                </tr>
                <tr><td>Height</td><td>{height}</td></tr>
                <tr><td>Width</td><td>{width}</td></tr>
                <tr><td>Holes</td><td>{holes}</td></tr>
                <tr><td>Parts</td><td>{parts}</td></tr>

                <tr><td colSpan="2"><b>Requirement Details :</b></td></tr>
                <tr>
                  <td>Party Name</td>
                  <td><input name="partyName" className="form-control" required /></td>
                </tr>
                <tr>
                  <td>Party Number</td>
                  <td><input name="partyNumber" className="form-control" required /></td>
                </tr>
                <tr>
                  <td>Qty</td>
                  <td><input name="qty" type="number" className="form-control" required /></td>
                </tr>
                <tr>
                  <td>Requirement Details</td>
                  <td><textarea name="requirementDetails" className="form-control" /></td>
                </tr>
                <tr>
                  <td>Required Days</td>
                  <td><input name="requiredDays" className="form-control" /></td>
                </tr>
                <tr>
                  <td></td>
                  <td><button className="btn btn-primary btn-sm">Submit</button></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>

        {/* CENTER VIDEOS */}
        <div
          className="d-flex gap-1 border-end border-dark px-1"
          style={{ width: "30%", minWidth: "300px", overflowX: "auto" }}
        >
          {videos.map((v, i) => (
            <video
              key={i}
              src={v}
              controls
              style={{ width: "200px", height: "100%", objectFit: "cover" }}
            />
          ))}
        </div>

        {/* RIGHT IMAGES */}
        <div style={{ width: "30%", minWidth: "300px" }}>
          <div className="d-flex gap-1 h-100">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                style={{ width: "200px", height: "100%", objectFit: "cover" }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default function PC5PeacockProducts() {
  const products = [
    { name: "PC5 PEACOCK PRODUCT 1", height: "5 Feet", width: "2 Feet", holes: "410", parts: "1", videos: ["/videos/video1.mp4","/videos/video2.mp4","/videos/video3.mp4","/videos/video4.mp4","/videos/video5.mp4"], images: ["/images/product1.jpeg","/images/product2.jpeg","/images/product3.jpeg","/images/product4.jpeg","/images/product5.jpeg"] },
    { name: "PC5 PEACOCK PRODUCT 2", height: "6 Feet", width: "2 Feet", holes: "420", parts: "1", videos: ["/videos/video6.mp4","/videos/video7.mp4","/videos/video8.mp4","/videos/video9.mp4","/videos/video10.mp4"], images: ["/images/product6.jpeg","/images/product7.jpeg","/images/product8.jpeg","/images/product9.jpeg","/images/product10.jpeg"] },
    { name: "PC5 PEACOCK PRODUCT 3", height: "7 Feet", width: "2 Feet", holes: "430", parts: "1", videos: ["/videos/video11.mp4","/videos/video12.mp4","/videos/video13.mp4","/videos/video14.mp4","/videos/video15.mp4"], images: ["/images/product11.jpeg","/images/product12.jpeg","/images/product13.jpeg","/images/product14.jpeg","/images/product15.jpeg"] },
    { name: "PC5 PEACOCK PRODUCT 4", height: "8 Feet", width: "2 Feet", holes: "440", parts: "1", videos: ["/videos/video16.mp4","/videos/video17.mp4","/videos/video18.mp4","/videos/video19.mp4","/videos/video20.mp4"], images: ["/images/product16.jpeg","/images/product17.jpeg","/images/product18.jpeg","/images/product19.jpeg","/images/product20.jpeg"] },
    { name: "PC5 PEACOCK PRODUCT 5", height: "9 Feet", width: "2 Feet", holes: "450", parts: "1", videos: ["/videos/video21.mp4","/videos/video22.mp4","/videos/video23.mp4","/videos/video24.mp4","/videos/video25.mp4"], images: ["/images/product21.jpeg","/images/product22.jpeg","/images/product23.jpeg","/images/product24.jpeg","/images/product25.jpeg"] },
    { name: "PC5 PEACOCK PRODUCT 6", height: "10 Feet", width: "2 Feet", holes: "460", parts: "1", videos: ["/videos/video26.mp4","/videos/video27.mp4","/videos/video28.mp4","/videos/video29.mp4","/videos/video30.mp4"], images: ["/images/product26.jpeg","/images/product27.jpeg","/images/product28.jpeg","/images/product29.jpeg","/images/product30.jpeg"] },
    { name: "PC5 PEACOCK PRODUCT 7", height: "11 Feet", width: "2 Feet", holes: "470", parts: "1", videos: ["/videos/video31.mp4","/videos/video32.mp4","/videos/video33.mp4","/videos/video34.mp4","/videos/video35.mp4"], images: ["/images/product31.jpeg","/images/product32.jpeg","/images/product33.jpeg","/images/product34.jpeg","/images/product35.jpeg"] },
    { name: "PC5 PEACOCK PRODUCT 8", height: "12 Feet", width: "2 Feet", holes: "480", parts: "1", videos: ["/videos/video36.mp4","/videos/video37.mp4","/videos/video38.mp4","/videos/video39.mp4","/videos/video40.mp4"], images: ["/images/product36.jpeg","/images/product37.jpeg","/images/product38.jpeg","/images/product39.jpeg","/images/product40.jpeg"] },
    { name: "PC5 PEACOCK PRODUCT 9", height: "13 Feet", width: "2 Feet", holes: "490", parts: "1", videos: ["/videos/video41.mp4","/videos/video42.mp4","/videos/video43.mp4","/videos/video44.mp4","/videos/video45.mp4"], images: ["/images/product41.jpeg","/images/product42.jpeg","/images/product43.jpeg","/images/product44.jpeg","/images/product45.jpeg"] },
  ];

  return (
    <>
      {products.map((p, idx) => (
        <Product
          key={idx}
          productName={p.name}
          height={p.height}
          width={p.width}
          holes={p.holes}
          parts={p.parts}
          videos={p.videos}
          images={p.images}
        />
      ))}
    </>
  );
}
