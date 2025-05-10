import { useEffect } from "react";
import { useRouter } from "next/router";

// Redirect to /blogs/general by default
export default function BlogsIndex() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/blogs/general");
  }, [router]);
  return null;
}
