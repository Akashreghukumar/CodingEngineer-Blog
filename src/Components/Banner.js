// import Carousel from "react-bootstrap/Carousel";

// function Banner() {
//   return (
//     <div className="banner">
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://img.freepik.com/free-vector/vector-banner-website-development_107791-3339.jpg?size=626&ext=jpg&ga=GA1.2.189827998.1670072784"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://img.freepik.com/free-vector/quality-assurance-isometric-landing-debugging_107791-7348.jpg?size=626&ext=jpg"
//             alt="Second slide"
//           />

//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://img.freepik.com/premium-vector/programming-courses-illustration-cyber-education-course-concept-online-it-courses-learning-coding-laptop-vector-isolated-background-eps-10_399089-3511.jpg?size=626&ext=jpg&ga=GA1.2.189827998.1670072784"
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default Banner;

import React from "react";

// const Banner = () => {
//   return (
//     <div>Banner</div>
//   )
// }

// export default Banner

import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <div className="banner">
      <Carousel fade>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src="https://img.freepik.com/free-vector/vector-banner-website-development_107791-3339.jpg?size=626&ext=jpg&ga=GA1.2.189827998.1670072784"
            alt="First slide"
          />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src="https://img.freepik.com/premium-vector/programming-courses-illustration-cyber-education-course-concept-online-it-courses-learning-coding-laptop-vector-isolated-background-eps-10_399089-3511.jpg?size=626&ext=jpg&ga=GA1.2.189827998.1670072784"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src="https://img.freepik.com/premium-vector/programming-courses-illustration-cyber-education-course-concept-online-it-courses-learning-coding-laptop-vector-isolated-background-eps-10_399089-3511.jpg?size=626&ext=jpg&ga=GA1.2.189827998.1670072784"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
