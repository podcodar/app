export type ImageWidthsWithBreakpointsProps = {
  small: string;
  medium: string;
  large: string;
};

export default function makeImageSizes({
  small,
  medium,
  large,
}: ImageWidthsWithBreakpointsProps) {
  // The values used for max-width comply with tailwind md and lg breakpoints
  return `(max-width: 768px) ${small}, (max-width: 1024px) ${medium}, ${large}`;
}
