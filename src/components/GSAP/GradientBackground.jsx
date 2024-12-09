import { useEffect } from "react";

const GradientBackground = ({ targetRef }) => {
  useEffect(() => {
    const colors = ["#115173", "#ffd700", "#4B49AC"];
    let step = 0;

    const updateBackground = () => {
      if (targetRef.current) {
        targetRef.current.style.background = `linear-gradient(90deg, ${colors[step]} 0%, ${colors[(step + 1) % colors.length]} 100%)`;
      }
      step = (step + 1) % colors.length;
    };

    const interval = setInterval(updateBackground, 2000);

    // Run it once when the component mounts to apply the first gradient
    updateBackground();

    return () => clearInterval(interval);
  }, [targetRef]);

  return null;
};

export default GradientBackground;
