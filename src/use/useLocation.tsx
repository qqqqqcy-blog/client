import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageViews() {
  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
}
