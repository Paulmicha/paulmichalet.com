import { useParams } from "@solidjs/router";

export default function VariantPage() {
  const params = useParams();
  return <div>Variant {params.variant}</div>;
}
