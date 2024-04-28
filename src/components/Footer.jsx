import { createSignal } from "solid-js";

export default function Footer() {
  const [count, setCount] = createSignal(0);
  return (
    <footer>
      <button class="increment" onClick={() => setCount(count() + 1)}>
        footer clicks: {count()}
      </button>
    </footer>
  );
}
