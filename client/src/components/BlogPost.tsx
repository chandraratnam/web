import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
}

export default function BlogPost({ title, date, content, imageUrl, videoUrl }: BlogPostProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <time className="text-sm text-gray-500">{date}</time>
      </CardHeader>
      <CardContent>
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full rounded-lg mb-4"
            loading="lazy"
          />
        )}
        {videoUrl && (
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src={videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        )}
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      </CardContent>
    </Card>
  );
}
