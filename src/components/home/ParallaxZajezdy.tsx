import ExportedImage from "next-image-export-optimizer";
type Props = {
  className?: string;
};

export default function ParallaxZajezdy({ className = "" }: Props) {
  return (
    <div className={`relative grid grid-cols-4 ${className}`}>
      {/* 1 */}
      <ExportedImage
        src="/images/conf.jpg"
        alt="Obrázek"
        width={352}
        height={568}
        objectFit="cover"
        loading="lazy"
        className="rounded-xl"
      />

      {/* 2 */}
      <ExportedImage
        src="/images/conf.jpg"
        alt="Obrázek"
        width={352}
        height={568}
        objectFit="cover"
        loading="lazy"
        className="rounded-xl"
      />
      <ExportedImage
        src="/images/conf.jpg"
        alt="Obrázek"
        width={352}
        height={568}
        objectFit="cover"
        loading="lazy"
        className="rounded-xl"
      />

      {/* 2 */}
      <ExportedImage
        src="/images/conf.jpg"
        alt="Obrázek"
        width={352}
        height={568}
        objectFit="cover"
        loading="lazy"
        className="rounded-xl"
      />
      <ExportedImage
        src="/images/conf.jpg"
        alt="Obrázek"
        width={352}
        height={568}
        objectFit="cover"
        loading="lazy"
        className="rounded-xl"
      />

      {/* 1 */}
      <ExportedImage
        src="/images/conf.jpg"
        alt="Obrázek"
        width={352}
        height={568}
        objectFit="cover"
        loading="lazy"
        className="rounded-xl"
      />
    </div>
  );
}
