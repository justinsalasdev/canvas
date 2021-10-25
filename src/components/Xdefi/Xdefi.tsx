import { useEffect, useState } from "react";
import { dWindow, XFI } from "./types";

const d_window = window as dWindow;

export default function Xdefi() {
  const [provider, setProvider] = useState<XFI>();
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    if (provider) {
      return;
    }
    if ("xfi" in d_window) {
      setProvider(d_window.xfi);
    }
  }, [flag]);

  console.log(provider);

  return (
    <div className="bg-primary">
      <p>{!!provider ? "installed" : "not installed"}</p>

      <button
        onClick={() => {
          setFlag((prev) => prev + 1);
        }}
      >
        refresh
      </button>
    </div>
  );
}
