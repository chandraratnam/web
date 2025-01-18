import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  details?: string[];
}

export default function ServiceCard({ 
  title, 
  description, 
  imageUrl, 
  altText,
  details = [] 
}: ServiceCardProps) {
  // Use relative paths for local assets
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `./assets${imageUrl}`;

  return (
    <Card className="overflow-hidden bg-[#faf6f0] border-[#e8dcc8] shadow-md hover:shadow-lg transition-all duration-300">
      <AspectRatio ratio={16/9}>
        <img
          src={fullImageUrl}
          alt={altText}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </AspectRatio>
      <CardHeader>
        <CardTitle className="text-[#2a1810]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[#634832] mb-4">{description}</p>
        {details && details.length > 0 && (
          <ul className="list-disc list-inside text-[#634832] space-y-1">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}