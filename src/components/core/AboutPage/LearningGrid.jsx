import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities to bring flexible,  course relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Course Curriculum",
    description:
      "Our course curriculum is meticulously designed to blend engaging content with interactive learning, ensuring a comprehensive and enjoyable educational experience for all users.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Our innovative learning methods combine interactive quizzes, real-time feedback, and gamified elements to make knowledge acquisition both effective and enjoyable.",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Earn prestigious certifications that validate your knowledge and skills, boosting your confidence and enhancing your professional profile.",
  },
  {
    order: 4,
    heading: "Rating Auto-grading",
    description:
      "Our fair and transparent grading system provides immediate feedback, helping you track your progress and identify areas for improvement.",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Equip yourself with the knowledge and skills you need to be job-ready and excel in your professional career.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;