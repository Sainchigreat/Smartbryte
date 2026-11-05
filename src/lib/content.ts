/**
 * SmartBryte homepage copy — single source of truth.
 *
 * Every visible string below is reproduced VERBATIM from the approved
 * SmartBryte Lovable Homepage Build Brief (PDF §7). Do not paraphrase,
 * shorten, expand, correct or invent wording. Nav labels are the only
 * additions and map 1:1 to supplied sections, as permitted by the brief.
 */

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "Why SmartBryte", href: "#why-smartbryte" },
  { label: "Programmes", href: "#programmes" },
  { label: "What Your Child Gains", href: "#what-your-child-gains" },
  { label: "FAQs", href: "#faqs" },
] as const;

export const APPLY_LABEL = "Apply Now";

export const HERO = {
  headline: "Turn Your Child Into a Future-Ready Genius.",
  supporting:
    "Give your child the knowledge and skills to excel in school, understand technology, solve problems and create opportunities in the world ahead.",
  primaryCta: "Explore Our Programmes",
  secondaryCta: "Apply Now",
  ageNote: "For learners aged 7–22.",
};

export const INTRO = {
  headline: "Education should prepare children for more than examinations.",
  paragraphs: [
    "The world is changing, and the knowledge and skills that young people need to succeed are changing with it. Gone are the days when good grades alone were enough to make a young person ready for the world of work. Today, especially in the age of AI, children need to know how to use technology, think through problems, develop ideas and turn what they know into something the world values.",
    "That's what SmartBryte brings to your child's education.",
    "Alongside their regular academic learning, our students explore technology, learn how to use AI, develop practical digital skills and work on projects that help them put their knowledge to use. They get to discover their interests, build confidence in their abilities and develop skills that can open doors to future opportunities.",
  ],
};

export const WHY = {
  headline: "An education that gives your child more.",
  introduction:
    "Choosing the right learning opportunities for your child matters. Beyond what they learn in school, they need opportunities to explore their interests, understand technology and develop skills they can put to use.",
  leadIn: "At SmartBryte, we make that possible through:",
  modules: [
    {
      title: "Academic and Digital Education",
      body: "Your child doesn't have to choose between academic learning and digital skills. We bring both together, giving them a stronger foundation in school subjects while introducing them to skills that are becoming increasingly important in today's world.",
    },
    {
      title: "Personalised Teacher Support",
      body: "Every student gets a dedicated teacher who follows their learning progress, provides guidance and helps them get the best out of their classes. Parents also have direct access to their child's teacher, so you never have to wonder how your child is doing.",
    },
    {
      title: "Practical, Hands-on Learning",
      body: "We don't want students to spend all their time listening to lessons and taking notes. They get to work on assignments, complete projects and apply what they learn to real-life situations.",
    },
    {
      title: "Flexible Learning Experience",
      body: "Your child can learn from home through our weekly live online classes and pre-recorded lessons, while also enjoying monthly physical learning sessions in Lekki, Lagos.",
    },
    {
      title: "Learning Beyond the Classroom",
      // NOTE: the approved source intentionally ends this paragraph without
      // a full stop. Preserved exactly.
      body: "The skills your child develops at SmartBryte can go beyond their regular schoolwork. We want them to become more confident in using technology, exploring ideas, solving problems and creating things of their own",
    },
  ],
};

export type Programme = {
  id: string;
  name: string;
  ageRange: string;
  headline: string;
  description: string;
  learn: string[];
  cta: string;
  tone: "sage" | "lavender" | "rose";
};

export const PROGRAMMES = {
  headline: "The right learning experience for every stage of growth.",
  introduction:
    "Children don't all learn the same way, and a seven-year-old shouldn't have the same learning experience as a seventeen-year-old. That's why we've structured our programmes around three age groups, with learning experiences suited to the needs and abilities of each stage.",
  learnLabel: "What they'll learn:",
  items: [
    {
      id: "junior-learners",
      name: "Junior Learners",
      ageRange: "Ages 7–12",
      headline: "Building strong foundations for a brighter future.",
      description:
        "These are the years when children are curious, eager to explore and discovering what they are capable of. Our Junior Learners programme gives them the opportunity to build strong academic foundations while getting introduced to technology and digital skills in ways they can understand and enjoy.",
      learn: [
        "Science, Technology, English and Mathematics.",
        "Introduction to computers and digital literacy.",
        "Creative thinking and problem-solving.",
        "Introduction to coding and technology.",
        "Age-appropriate creative and digital projects.",
      ],
      cta: "Explore Junior Learners",
      tone: "sage",
    },
    {
      id: "teen-learners",
      name: "Teen Learners",
      ageRange: "Ages 13–19",
      headline: "Helping teenagers turn their interests into useful skills.",
      description:
        "Teenage years are an important time to discover interests, develop abilities and start exploring future possibilities. Our programme helps teenagers strengthen their academic knowledge while learning practical digital skills they can use to build projects, express their creativity and explore potential career paths.",
      learn: [
        "Science, Technology, English and Mathematics.",
        "Website development and coding.",
        "Artificial intelligence and AI fluency.",
        "Content creation and copywriting.",
        "Digital marketing and sales.",
        "Practical projects and problem-solving.",
      ],
      cta: "Explore Teen Learners",
      tone: "lavender",
    },
    {
      id: "young-adults",
      name: "Young Adults",
      ageRange: "Ages 20–22",
      headline: "Developing skills that open doors to opportunities.",
      description:
        "At this stage, learning should begin to connect more directly with the opportunities young adults want to pursue. Whether your child is interested in technology, entrepreneurship, freelancing or building a career, our programme provides opportunities to develop practical skills and gain experience through real projects.",
      learn: [
        "Advanced digital skills and technology.",
        "Website and mobile application development.",
        "Artificial intelligence and practical AI tools.",
        "Content creation and copywriting.",
        "Sales, marketing and digital entrepreneurship.",
        "Practical projects and professional development.",
      ],
      cta: "Explore Young Adults",
      tone: "rose",
    },
  ] as Programme[],
};

export const GAINS = {
  headline:
    "We want your child to leave with more than just what they learn in class.",
  introduction:
    "Imagine your child being able to confidently use technology, build something from an idea, solve problems independently and recognise opportunities around them. These are the kinds of abilities we want every SmartBryte student to develop.",
  items: [
    {
      title: "Confidence to Explore and Try New Things",
      body: "Your child gets the opportunity to explore different areas of knowledge, discover their interests and become more confident in their abilities.",
    },
    {
      title: "The Ability to Solve Problems",
      body: "Through academic lessons and practical projects, students learn to think through challenges, find solutions and approach problems differently.",
    },
    {
      title: "Practical Digital Skills",
      body: "They learn how to use technology, work with AI tools and develop digital skills that can be useful in their future careers and businesses.",
    },
    {
      title: "The Ability to Turn Ideas into Projects",
      body: "Rather than keeping everything they've learnt in their notebooks, students get opportunities to put their knowledge to work and create things of their own.",
    },
    {
      title: "A Head Start in the World of Opportunities",
      body: "The earlier children become familiar with technology and practical skills, the more time they have to explore their interests and prepare for the opportunities ahead.",
    },
  ],
};

export const TESTIMONIALS = {
  headline:
    "Hear from parents who have experienced the SmartBryte difference.",
  // The only permitted testimonial-section content until genuine
  // testimonials are supplied. No quotes, names, ratings or avatars.
  note: "This section will be populated with genuine parent testimonials once the school begins operations.",
};

export const FAQS = {
  headline: "Got questions? We have answers.",
  items: [
    {
      q: "What age groups can enrol at SmartBryte?",
      a: "We welcome learners between the ages of 7 and 22. Our programmes are divided into three groups: Junior Learners (7–12), Teen Learners (13–19) and Young Adults (20–22).",
    },
    {
      q: "Does SmartBryte replace conventional schooling?",
      a: "No. SmartBryte is a supplementary educational programme. Your child can continue attending their regular school while taking advantage of the additional academic and digital skills training we offer.",
    },
    {
      q: "What will my child learn at SmartBryte?",
      a: "Our curriculum combines Science, Technology, English and Mathematics with practical digital skills such as website development, AI fluency, mobile app development, content creation, copywriting, sales and marketing.",
    },
    {
      q: "How are classes conducted?",
      a: "We have weekly live online classes via Zoom, alongside pre-recorded lessons that students can access for additional learning. We also organise monthly physical classes in Lekki, Lagos.",
    },
    {
      q: "Will my child have a personal teacher?",
      a: "Yes. Every student is assigned a dedicated teacher who provides guidance and follows their learning progress. As a parent, you'll also have direct access to your child's teacher.",
    },
    {
      q: "How do you assess students' progress?",
      a: "Students are assessed through tests, examinations, assignments and practical projects. This helps us evaluate their understanding of what they've learnt and how well they can apply it.",
    },
    {
      q: "How much does it cost to enrol?",
      a: "Our tuition is structured around three-month payment periods. The fees vary depending on the programme your child enrols in. You can find the relevant fees and payment information on our programme page.",
    },
    {
      q: "Will my child receive a certificate?",
      a: "Yes. Students who successfully complete the relevant programme requirements will receive certificates. Details of the awarding and recognition arrangements will be provided during enrolment.",
    },
    {
      q: "How can I enrol my child?",
      a: "Simply visit our application page, select the appropriate programme for your child and complete the application process. Enrolment is open to eligible learners within our three age groups.",
    },
  ],
};

export const FINAL_CTA = {
  headline: "Your child's future is worth investing in.",
  supporting1:
    "Don't let your child's education stop at what they learn in school. Give them the opportunity to explore technology, develop practical skills, discover their abilities and prepare for a world full of opportunities.",
  supporting2: "At SmartBryte, we're ready to help them get started.",
  cta: "Apply Now",
};

/* Meaningful, non-claiming alt text for the content photography.
   Pictured people are not identified as SmartBryte students or staff. */
export const IMAGE_ALT = {
  heroJunior:
    "Two young learners smiling as they explore a tablet together at a classroom table",
  heroTeen:
    "A teenage learner wearing headphones and smiling during a live online class on a laptop",
  heroProject:
    "A small group of learners collaborating on a hands-on technology project with a laptop and circuit kit",
  heroYoungAdult:
    "A young adult working confidently on a digital project on a laptop",
  introGuided:
    "A mentor guiding a young learner through a lesson on a laptop",
};
