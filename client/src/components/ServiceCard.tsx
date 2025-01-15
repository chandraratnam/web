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
}

export default function ServiceCard({ title, description, imageUrl, altText }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <AspectRatio ratio={16/9}>
        <img
          src={imageUrl}
          alt={altText}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </AspectRatio>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
