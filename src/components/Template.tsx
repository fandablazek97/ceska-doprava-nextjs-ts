type TemplateOptions = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

export default function Template({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: TemplateOptions) {
  // Logic goes here
  return (
    <Tag className={`${className}`} {...rest}>
      {children}
    </Tag>
  );
}
