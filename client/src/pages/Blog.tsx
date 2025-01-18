import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogPost from "@/components/BlogPost";

export default function Blog() {
  const [currentTab] = useState("latest");
  const base = import.meta.env.VITE_BASE_URL || '';

  // Complete static blog posts data
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

        <h3>Common Pain Conditions Treated</h3>
        <ul>
          <li>Lower back pain and sciatica</li>
          <li>Neck and shoulder tension</li>
          <li>Arthritis and joint pain</li>
          <li>Headaches and migraines</li>
          <li>Sports injuries</li>
        </ul>

        <p>Through a combination of precise needle placement and traditional techniques,
        acupuncture can provide significant relief from various types of chronic pain,
        often with lasting results.</p>
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

        <h3>Seasonal Wellness Practices</h3>
        <ul>
          <li>Morning stretching routines</li>
          <li>Regular outdoor walks</li>
          <li>Mindful breathing exercises</li>
          <li>Light, seasonal meals</li>
        </ul>

        <p>By following these seasonal guidelines and maintaining regular acupuncture
        treatments, you can support your body's natural healing processes and maintain
        optimal health throughout the spring season.</p>
      `,
      imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15"
    },
    {
      id: 3,
      title: "Women's Health: Natural Approaches to Hormonal Balance",
      date: "February 15, 2024",
      category: "wellness",
      content: `
        <p>Traditional Chinese Medicine offers effective, natural approaches to women's health issues,
        particularly in managing hormonal imbalances and reproductive health.</p>

        <h3>Key Benefits of Acupuncture for Women's Health</h3>
        <ul>
          <li>Regulates menstrual cycles</li>
          <li>Reduces PMS symptoms</li>
          <li>Supports fertility and reproductive health</li>
          <li>Manages menopausal symptoms</li>
          <li>Improves overall energy and vitality</li>
        </ul>

        <p>Through a combination of acupuncture, herbal medicine, and lifestyle recommendations,
        we can address various women's health concerns naturally and effectively.</p>
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
                imageUrl={post.imageUrl.startsWith('http') ? post.imageUrl : `${base}${post.imageUrl}`}
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
                  imageUrl={post.imageUrl.startsWith('http') ? post.imageUrl : `${base}${post.imageUrl}`}
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
                  imageUrl={post.imageUrl.startsWith('http') ? post.imageUrl : `${base}${post.imageUrl}`}
                />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}