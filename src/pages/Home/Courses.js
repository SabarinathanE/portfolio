import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/personal";

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (
    <div>
      <SectionTitle title="Courses" />
      <div className="flex py-10 gap-20 sm:flex-col lg:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll lg:w-full lg:flex-row lg:overflow-x-scroll sm:w-full">
          {courses.map((course, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                 ${
                   selectedItemIndex === index
                     ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                     : "text-white"
                 } `}
              >
                {course.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col lg:flex-col">
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {courses[selectedItemIndex].title}
            </h1>

            <p className="text-white">
              {courses[selectedItemIndex].description}
            </p>
            <p className="text-white">
              <a href={`${courses[selectedItemIndex].link}`} target="blank">
                👉&nbsp;<u>Certificate</u>
              </a>
            </p>
          </div>
          <img
            src={courses[selectedItemIndex].image}
            alt=""
            className="h-52 w-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;
