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
    <Card className="overflow-hidden bg-[#fdfbf7] border-[#e6dfd2] shadow-md hover:shadow-lg transition-all duration-300">
      <AspectRatio ratio={16/9}>
        <img
          src={imageUrl}
          alt={altText}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </AspectRatio>
      <CardHeader>
        <CardTitle className="text-[#2c1810]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[#594a42]">{description}</p>
      </CardContent>
    </Card>
  );
}