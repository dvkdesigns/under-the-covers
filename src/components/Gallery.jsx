import React from "react";
import "../styles/Gallery.scss";

const images = [
  { path: "gallery/nature/img1.jpg", category: "Nature" },
  { path: "gallery/nature/img2.jpg", category: "Nature" },
  { path: "gallery/urban/img3.jpg", category: "Urban" },
  { path: "gallery/urban/img4.jpg", category: "Urban" },
];

const Gallery = () => {
  const groupedImages = images.reduce((acc, img) => {
    acc[img.category] = acc[img.category] || [];
    acc[img.category].push(img);
    return acc;
  }, {});

  return (
    <div className="gallery">
      {Object.entries(groupedImages).map(([category, imgs]) => (
        <section key={category} className="gallery-section">
          <h3>{category}</h3>
          <div className="masonry">
            {imgs.map((img, index) => (
              <div key={index} className="masonry-item">
                <img src={img.path} alt={category} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Gallery;
