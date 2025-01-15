import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function WhatITreat() {
  const conditions = [
    {
      title: "Pain Management",
      items: [
        "Back pain and sciatica",
        "Neck pain and shoulder tension",
        "Knee pain and arthritis",
        "Sports injuries and muscle strains",
        "Headaches and migraines",
        "Joint pain and inflammation"
      ]
    },
    {
      title: "Women's Health",
      items: [
        "Menstrual irregularities",
        "Fertility support",
        "Pregnancy-related conditions",
        "Menopausal symptoms",
        "PCOS and endometriosis",
        "Hormonal imbalances"
      ]
    },
    {
      title: "Mental Health & Stress",
      items: [
        "Anxiety and depression",
        "Sleep disorders",
        "Stress management",
        "Fatigue and exhaustion",
        "Emotional balance",
        "Mental clarity"
      ]
    },
    {
      title: "Digestive Health",
      items: [
        "IBS and digestive disorders",
        "Bloating and indigestion",
        "Food sensitivities",
        "Acid reflux",
        "Gut health optimization",
        "Metabolic disorders"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Conditions I Treat</h1>
        <p className="text-lg text-gray-600 mb-8">
          With over two decades of experience in Traditional Chinese Medicine and Acupuncture,
          I offer comprehensive treatment for a wide range of conditions. My systematic approach
          combines ancient wisdom with modern medical understanding to provide effective,
          personalized care.
        </p>

        <div className="space-y-8">
          {conditions.map((section, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <Separator className="mb-4" />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-[#5cb85c] rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Personalized Treatment Approach</h3>
          <p className="text-gray-600 mb-4">
            Every treatment plan is tailored to your specific needs and condition. I take time
            to understand your health history, lifestyle, and goals to create the most effective
            treatment strategy for you.
          </p>
          <p className="text-gray-600">
            Through a combination of acupuncture, Chinese herbs (when appropriate), and lifestyle
            recommendations, we work together to achieve optimal results and long-lasting health
            improvements.
          </p>
        </div>
      </div>
    </div>
  );
}
