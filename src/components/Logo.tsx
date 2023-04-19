import Image, { ImageProps } from "next/image";

export const Logo = (props: Omit<ImageProps, "src" | "alt">) => (
  <div>
    <Image
      {...props}
      alt="PodCodar Llama"
      height={32}
      priority
      src="/images/logo.svg"
      width={32}
    />
  </div>
);
