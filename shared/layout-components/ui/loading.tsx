"use client";
import Image from "next/image";

const SpinningLoading = () => {
  return (
    <div className="loading-container">
      <Image
        src="/assets/loading/loading.gif"
        alt="Loading..."
        width={100}
        height={100}
        unoptimized
      ></Image>
      <style jsx>{`
        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.8);
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default SpinningLoading;
