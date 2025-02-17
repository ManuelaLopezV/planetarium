"use client";

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-black -z-10">
      <div className="stars"></div>
      <style jsx global>{`
        .stars {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .stars::before,
        .stars::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-image: radial-gradient(
              1px 1px at 25px 5px,
              white,
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),
            radial-gradient(
              1px 1px at 125px 20px,
              white,
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              1.5px 1.5px at 50px 75px,
              white,
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2px 2px at 15px 125px,
              white,
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2.5px 2.5px at 110px 80px,
              white,
              rgba(255, 255, 255, 0)
            );
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: starFall 15s linear infinite;
          opacity: 0.9;
        }

        .stars::after {
          background-image: radial-gradient(
              1px 1px at 75px 45px,
              white,
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              1px 1px at 100px 65px,
              white,
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              1.5px 1.5px at 175px 40px,
              white,
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2px 2px at 150px 115px,
              white,
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              2.5px 2.5px at 45px 165px,
              white,
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              1.5px 1.5px at 140px 140px,
              white,
              rgba(255, 255, 255, 0)
            );
          animation: starFall 20s linear infinite;
          animation-delay: -7s;
        }

        @keyframes starFall {
          0% {
            transform: translateY(-200px);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        /* Añadimos una tercera capa de estrellas más rápidas */
        .stars::before {
          background-image: radial-gradient(
              1px 1px at 35px 15px,
              white,
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(1px 1px at 80px 35px, white, rgba(255, 255, 255, 0)),
            radial-gradient(
              1.5px 1.5px at 155px 30px,
              white,
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(2px 2px at 70px 95px, white, rgba(255, 255, 255, 0)),
            radial-gradient(
              2.5px 2.5px at 25px 145px,
              white,
              rgba(255, 255, 255, 0)
            ),
            radial-gradient(
              1.5px 1.5px at 130px 110px,
              white,
              rgba(255, 255, 255, 0)
            );
          animation: starFall 10s linear infinite;
          animation-delay: -3s;
        }
      `}</style>
    </div>
  );
};

export default StarryBackground;
