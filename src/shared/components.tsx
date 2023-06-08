import tw from "tailwind-styled-components";
import NextImage, { ImageProps } from "next/image";

export const Title = tw.h1`
  text-lg
  text-center
  font-semibold
  leading-7
  text-white
`;

export const Form = tw.form`
  bg-pod-purple
  w-full
  mx-auto
  my-10
  p-8
  rounded-lg
  md:w-9/12
`;

export const Label = tw.label`
  block
  text-sm
  font-medium
  leading-6
  text-white
  text-justify
`;

const focusStyles = () => `
  focus:ring-2
  focus:ring-inset
  focus:ring-indigo-600
`;

export const Select = tw.select`
  block w-full rounded-md border-0 py-1.5 px-1.5 text-black
  shadow-sm ring-1 ring-inset ring-gray-300
  sm:max-w-xs sm:text-sm sm:leading-6
  ${focusStyles}
`;

export const Input = tw.input`
  block w-full rounded-md border-0 py-1.5 px-1.5 text-black
  shadow-sm ring-1 ring-inset ring-gray-300
  placeholder:text-gray-400 sm:text-sm sm:leading-6
  ${focusStyles}
`;

export const Textarea = tw.textarea`
  p-3
  w-full
  rounded-lg
  border-gray-200
  text-sm
  ${focusStyles}
`;

export const Image = (props: ImageProps) => (
  <ImageWrapper height={props.height} width={props.width}>
    <ImageStyled {...props} />
  </ImageWrapper>
);

type WrapperProps = Pick<ImageProps, "width" | "height">;

const ImageWrapper = tw.div<WrapperProps>`
  flex
  flex-1
  max-w-[${(p) => p.width}px]
  max-h-[${(p) => p.height}px]
`;

const ImageStyled = tw(NextImage)`
  h-full
  w-full
  object-cover
`;

export const Container = tw.div`
  mx-auto
  max-w-7xl
  px-4 py-6
  sm:px-6 lg:px-8
`;
