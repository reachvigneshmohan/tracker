// components/Toolbox.tsx
import React from "react";

const Toolbox: React.FC = () => {
  return (
    <div className="toolbox">
      <button>
        <i className="ri-car-line"></i>
      </button>
      <button>
        <i className="ti ti-route"></i>
      </button>
      <button>
        <i className="fe fe-map-pin"></i>
      </button>
      <button>
        <i className="ri-pin-distance-line"></i>
      </button>
      <button>
        <i className="ri-map-2-line"></i>
      </button>
      <button>
        <i className="ri-settings-4-line"></i>
      </button>
      <button>
        <i className="ri-road-map-line"></i>
      </button>
      <button>
        <i className="ri-flow-chart"></i>
      </button>
      <button>
        <i className="ri-global-line"></i>
      </button>
      <button>
        <i className="ri-stack-line"></i>
      </button>
      <button>
        <i className="ri-mind-map"></i>
      </button>
    </div>
  );
};

export default Toolbox;
