type WrapperOptions = {
  as?: React.ElementType;
  children: React.ReactNode;
  size?: "sm" | "base" | "lg" | "fluid";
  paddedContent?: "sm" | "base" | "lg" | "none";
  className?: string;
  [x: string]: any;
};

const sizeClasses = {
  sm: "max-w-3xl",
  base: "max-w-7xl",
  lg: "max-w-[1728px]",
  fluid: "",
};

const paddedContentClasses = {
  sm: "py-16 xl:py-24",
  base: "py-28 xl:py-36",
  lg: "py-32 xl:py-52",
  none: "",
};

export default function Wrapper({
  as: Tag = "div",
  size = "base",
  paddedContent = "none",
  className = "",
  children,
  ...Options
}: WrapperOptions) {
  return (
    <Tag
      className={`mx-auto w-[90%] ${sizeClasses[size]} ${paddedContentClasses[paddedContent]} ${className}`}
      {...Options}
    >
      {children}
    </Tag>
  );
}