import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

type Props = {
  tripId: number;
  imageSrc: string;
  imageAlt: string;
  country: string;
  name: string;
  dateFrom: string;
  dateTo: string;
  className?: string;
};

export default function NearestDeparturesCard({
  tripId,
  imageSrc,
  imageAlt,
  country,
  name,
  dateFrom,
  dateTo,
  className = "",
}: Props) {
  return (
    <Link href={`/zajezdy/${tripId}`}>
      <a
        className={`flex flex-col items-start justify-start gap-4 transition duration-200 hover:-translate-y-4 ${className}`}
      >
        <ExportedImage
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={500}
          objectFit="cover"
          loading="eager"
        />
        <span className="block text-lg font-semibold text-rich">
          {country} - {name}
        </span>
        <span className="block">
          {dateFrom} - {dateTo}
        </span>
      </a>
    </Link>
  );
}
