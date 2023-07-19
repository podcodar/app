import tw from "tailwind-styled-components";
import NextImage, { ImageProps } from "next/image";

export const TitleLabel = tw.h1`
  text-lg text-center font-mono font-semibold leading-7 text-gray-800
  p-10 my-6 mx-auto bg-slate-100 w-72
  shadow-md sm:leading-9 sm:w-1/2
`;

export const Form = tw.form`
  bg-slate-100
  grid gap-6 p-10 mx-auto justify-center
  shadow-md sm:w-1/2 w-72
`;

export const Label = tw.label`
  block 
  text-sm text-justify font-medium text-gray-700
`;

const focusStyles = () => `
  shadow-sm 
  focus:outline-none focus:ring-1 focus:ring-pod-purple focus:shadow-sm focus:shadow-pod-purple-light
  transition duration-300 
`;

export const Select = tw.select`
  block border-0 w-full p-1.5 text-gray-700 bg-white
  shadow-sm ring-1 ring-inset ring-gray-300
  sm:max-w-xs sm:text-sm sm:leading-6
  ${focusStyles}
`;

export const Input = tw.input`
  block border-1 w-full p-1.5 text-gray-700
  shadow-sm ring-1 ring-inset ring-gray-300
  placeholder:text-gray-400 sm:text-sm sm:leading-6
  
  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none
  ${focusStyles}
`;

export const Textarea = tw.textarea`
  block w-full border-1 p-1.5 mt-2 text-gray-700
  shadow-sm ring-1 ring-inset ring-gray-300
  placeholder:text-gray-400 sm:text-sm sm:leading-6 sm:col-span-1
  resize-none 
  ${focusStyles}
`;

export const Button = tw.button`
  text-sm font-medium text-white 
  w-20 h-10 p-1 bg-pod-purple 
  shadow-sm border-none
  hover:bg-pod-purple-dark hover:shadow-md hover:text-slate-100
  active:shadow-none cursor-pointer
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

export const ErrorMessage = tw.p`
  text-xs text-red-400
`;

export const ButtonWrapper = tw.div`
  flex flex-wrap justify-around
`;
