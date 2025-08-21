import React from "react";
import { Particle } from "jparticles";

class Example extends React.Component {
  particleInstance = null;

  componentDidMount() {
    const particleColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--particle-color")
      .trim();
    const particleLineColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--particle-line-color")
      .trim();

    this.particleInstance = new Particle("#demo", {
      color: [particleColor],
      lineColor: particleLineColor,
      lineShape: "cube",
      range: 2000,
      proximity: 100,
      parallax: true,
      opacity: 0.3,
    });
  }

  render() {
    return <div id="demo" style={{ width: "100%", height: "100%" }}></div>;
  }
}

export default Example;
