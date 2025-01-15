import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogPost from "@/components/BlogPost";

export default function Blog() {
  const [currentTab] = useState("latest");

  const blogPosts = [
    {
      id: 1,
      title: "Understanding the Benefits of Acupuncture for Chronic Pain",
      date: "March 15, 2024",
      category: "pain-management",
      content: `
        <p>Chronic pain affects millions of people worldwide, impacting their quality of life and daily activities. 
        Traditional Chinese Medicine, particularly acupuncture, offers a natural and effective approach to managing 
        chronic pain conditions.</p>
        
        <h3>How Acupuncture Works for Pain Relief</h3>
        <p>Acupuncture works through multiple mechanisms to reduce pain and promote healing:</p>
        <ul>
          <li>Stimulates the release of natural pain-relieving chemicals</li>
          <li>Reduces inflammation in affected areas</li>
          <li>Improves blood circulation to promote healing</li>
          <li>Relaxes tense muscles and reduces stress</li>
        </ul>
      `,
      imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c"
    },
    {
      id: 2,
      title: "Seasonal Health Tips: Maintaining Balance in Spring",
      date: "March 1, 2024",
      category: "wellness",
      content: `
        <p>In Traditional Chinese Medicine, spring is associated with the liver and gallbladder organs. 
        This season is ideal for cleansing and rejuvenation. Here are some tips to maintain optimal 
        health during spring:</p>

        <h3>Spring Health Recommendations</h3>
        <ul>
          <li>Eat more green, leafy vegetables</li>
          <li>Practice gentle stretching exercises</li>
          <li>Maintain a consistent sleep schedule</li>
          <li>Stay hydrated with warm water and herbal teas</li>
        </ul>
      `,
      imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Health & Wellness Blog</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore articles about acupuncture, Traditional Chinese Medicine, and natural health tips
          to support your wellness journey.
        </p>

        <Tabs defaultValue={currentTab} className="w-full mb-8">
          <TabsList>
            <TabsTrigger value="latest">Latest Posts</TabsTrigger>
            <TabsTrigger value="pain-management">Pain Management</TabsTrigger>
            <TabsTrigger value="wellness">Wellness</TabsTrigger>
          </TabsList>

          <TabsContent value="latest" className="space-y-8">
            {blogPosts.map((post) => (
              <BlogPost
                key={post.id}
                title={post.title}
                date={post.date}
                content={post.content}
                imageUrl={post.imageUrl}
              />
            ))}
          </TabsContent>

          <TabsContent value="pain-management" className="space-y-8">
            {blogPosts
              .filter((post) => post.category === "pain-management")
              .map((post) => (
                <BlogPost
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  content={post.content}
                  imageUrl={post.imageUrl}
                />
              ))}
          </TabsContent>

          <TabsContent value="wellness" className="space-y-8">
            {blogPosts
              .filter((post) => post.category === "wellness")
              .map((post) => (
                <BlogPost
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  content={post.content}
                  imageUrl={post.imageUrl}
                />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
