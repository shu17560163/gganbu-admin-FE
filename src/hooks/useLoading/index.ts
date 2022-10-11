import { useState } from "react";

export default function useLoading(initState?: boolean) {
  const [loading, setLoading] = useState(initState || false);
  return { loading, setLoading };
}
