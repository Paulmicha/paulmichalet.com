import { createSignal } from "solid-js";
import "./Header.css";

export default function Header() {
  const [count, setCount] = createSignal(0);
  return (
    <header>
      <button class="increment" onClick={() => setCount(count() + 1)}>
        header clicks: {count()}
      </button>
    </header>
  );
}