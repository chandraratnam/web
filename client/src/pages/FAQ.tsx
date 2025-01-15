import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What can I expect during my first acupuncture treatment?",
      answer: "Your first visit will include a comprehensive consultation where we discuss your health history and current concerns. I'll perform a traditional Chinese medicine assessment, including pulse and tongue diagnosis. The actual treatment involves the gentle insertion of very fine needles at specific points. Most people find the experience relaxing and often fall asleep during treatment."
    },
    {
      question: "Does acupuncture hurt?",
      answer: "Most people experience minimal to no discomfort during treatment. The needles used are extremely thin, about the width of a human hair. You may feel a slight sensation when the needle is inserted, but it should not be painful. Many patients report feeling deeply relaxed during and after treatment."
    },
    {
      question: "How many treatments will I need?",
      answer: "The number of treatments varies depending on your condition and how your body responds. Acute conditions may resolve in 2-3 sessions, while chronic conditions typically require a longer course of treatment. We'll discuss a recommended treatment plan during your first visit based on your specific situation."
    },
    {
      question: "Is acupuncture safe?",
      answer: "Yes, acupuncture is very safe when performed by a qualified practitioner. I use single-use, sterile needles and follow strict hygiene protocols. All treatments are performed in a clean, professional environment. Acupuncture has very few side effects and is considered a safe form of treatment for most people."
    },
    {
      question: "What conditions can acupuncture treat?",
      answer: "Acupuncture can effectively treat a wide range of conditions including pain management, stress and anxiety, digestive issues, women's health concerns, headaches, sleep disorders, and more. Visit our 'What I Treat' page for a comprehensive list of conditions."
    },
    {
      question: "How should I prepare for my treatment?",
      answer: "Wear loose, comfortable clothing that can be easily rolled up above knees and elbows. Try to eat a light meal 2-3 hours before treatment. Avoid alcohol and strenuous exercise before and after your session. Arrive a few minutes early to complete any necessary paperwork and relax before treatment."
    },
    {
      question: "Are Chinese herbs safe to take with my current medications?",
      answer: "It's important to inform me of all medications you're currently taking. While Chinese herbs are generally safe, some may interact with certain medications. I'll carefully review your medication list to ensure there are no contraindications before prescribing any herbs."
    },
    {
      question: "How long do appointments last?",
      answer: "Initial consultations typically last 60-90 minutes, which includes a detailed health history and your first treatment. Follow-up appointments are usually 45-60 minutes. The actual time needles are retained is typically 20-30 minutes."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-8">
          Find answers to common questions about acupuncture treatment and what to expect
          during your visit. If you have additional questions, please don't hesitate to contact me.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600">
            I'm here to help you understand how acupuncture can benefit your health.
            Feel free to contact me directly with any specific questions you may have
            about treatment options or scheduling.
          </p>
        </div>
      </div>
    </div>
  );
}
