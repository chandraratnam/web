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
  // Ensure image URLs are correctly handled for GitHub Pages deployment
  const base = import.meta.env.VITE_BASE_URL || '';
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${base}${imageUrl}`;

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
        <p className="text-[#634832]">{description}</p>
      </CardContent>
    </Card>
  );
}