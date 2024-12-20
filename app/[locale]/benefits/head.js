"use client"

import DefaultTags from "@/app/default-tags"; // Import DefaultTags component
import { usePathname } from 'next/navigation';

export default function Head() {
  const currentPath = usePathname();

  const title =
    currentPath === "/en/benefits" ? "Benefits | InnerLight" : "فائدة | ضوء داخلي";

  return (
    <>
      <DefaultTags
        title={title}
        description="InnerLight is one of the best course and meditation websites"
        keywords="online InnerLight keywords"
      />
    </>
  );
}