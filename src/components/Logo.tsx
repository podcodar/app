import Image, { ImageProps } from "next/image";

export const Logo = (props: Omit<ImageProps, "src" | "alt">) => (
  <div>
    <Image
      {...props}
      priority
      height={32}
      width={32}
      src="/images/logo.svg"
      alt="PodCodar Llama"
    />
  </div>
);
