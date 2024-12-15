import React, { useEffect, useRef, useState } from "react";
import "./Work.css";

function Work() {
  const trackRef = useRef(null); // Reference for the carousel track
  const [currentIndex, setCurrentIndex] = useState(1); // Current image index
  const imageWidthRef = useRef(0); // Width of one image
  const images = [
    "stack.png",
    "front.png",
    "dev.png",
    "cltest.png",
    "dbase.png",
    "cms.jpg",
  ]; // Images array
  const totalImages = images.length; // Total number of actual images

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate image width once DOM is loaded
    const imageWidth = track.querySelector(".carousel-image").clientWidth;
    imageWidthRef.current = imageWidth;

    // Set the initial position of the carousel
    track.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
  }, [currentIndex]);

  const moveToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;

    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(${-index * imageWidthRef.current}px)`;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const track = trackRef.current;

    const handleTransitionEnd = () => {
      if (currentIndex === 0) {
        // Jump to the last real image
        track.style.transition = "none";
        setCurrentIndex(totalImages);
        track.style.transform = `translateX(${
          -totalImages * imageWidthRef.current
        }px)`;
      } else if (currentIndex === totalImages + 1) {
        // Jump to the first real image
        track.style.transition = "none";
        setCurrentIndex(1);
        track.style.transform = `translateX(${
          -1 * imageWidthRef.current
        }px)`;
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      track.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex, totalImages]);

  const moveNext = () => {
    moveToIndex(currentIndex + 1);
  };

  const movePrev = () => {
    moveToIndex(currentIndex - 1);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      moveNext();
    }, 5000);

    return () => {
      clearInterval(autoplay);
    };
  }, [currentIndex]);

  return (
    <div className="work">
      <div className="tech">
        <div className="container5">
          <div className="line"></div>
          <h3>Our</h3> 
          <h2>Tech Stack</h2>
           <div className="tabs">
            <div className="tab">Backend</div>
            <div className="tab">Frontend</div>
            <div className="tab">Databases</div>
            <div className="tab">CMS</div>
            <div className="tab">CloudTesting</div>
            <div className="tab">DevOps</div>
          </div>
          <div className="track">
            <div className="carousel-container">
              <button className="carousel-btn prev-btn" onClick={movePrev}>
                &lt;
              </button>
              <div className="carousel">
                <div className="carousel-track" ref={trackRef}>
                  {/* Clone the last image for the infinite loop */}
                  <img
                    src={images[totalImages - 1]}
                    alt={`Image ${totalImages}`}
                    className="carousel-image"
                    height={500}
                    width={1600}
                  />
                  {/* Render all images */}
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="carousel-image"
                      height={500}
                    width={1600}
                    />
                  ))}
                  {/* Clone the first image for the infinite loop */}
                  <img
                    src={images[0]}
                    alt="Image 1"
                    className="carousel-image"
                    height={500}
                    width={1600}
                  />
                </div>
              </div>
              <button className="carousel-btn next-btn" onClick={moveNext}>
                &gt;
              </button>
            </div>
          </div>
          <div className="container4">
        <h1>
          How development <span>through Alcaline works</span>
        </h1>
        <div className="line"></div>
        <div className="steps">
          <div className="step">
            <h2>#1 Assemble the right team</h2>
            <p>
              We handle all aspects of vetting and choosing the right team that
              you don’t have the time, expertise, or desire to do.
            </p>
          </div>
          <div className="step">
            <h2>#3 Tech architecture</h2>
            <p>
              We break monolithic apps into microservices. Decoupling the code
              allows teams to move faster and more independently.
            </p>
          </div>
          <div className="step">
            <h2>#5 Code reviews</h2>
            <p>
              Code reviews before release help detect issues like memory leaks,
              file leaks, performance signs, and general bad smells.
            </p>
          </div>
        </div>
        <div className="line-horizontal">
          <i className="fas fa-trophy trophy"></i>
        </div>
        <div className="steps">
          <div className="step">
            <h2>#2 Sprint planning</h2>
            <p>
              Sprint roadmap is a collective planning effort. Team members
              collaborate to clarify items and ensure shared understanding.
            </p>
          </div>
          <div className="step">
            <h2>#4 Standups &amp; weekly demos</h2>
            <p>
              Standups, weekly demos, and weekly reviews make sure everyone is
              on the same page and can raise their concerns.
            </p>
          </div>
          <div className="step">
            <h2>#6 Iterative delivery</h2>
            <p>
              We divide the implementation process into several checkpoints
              rather than a single deadline.
            </p>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
