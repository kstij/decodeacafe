import ChooseBox from "./ChooseBox";
function WhyUs() {
  return (
    <>
      <section id="choose-us" className="why-section">
        <div className="container">
          <div className="choose-container">
            <h2>
              About <span> us</span>
            </h2>
            <div className="choose-container__content">
              <div className="choose-container__content__1">
                <ChooseBox
                  title="Encouraging Learning in Public."
                  text="DeCodeCafe is a student community of like-minded people who believe in Kaizen (Continuous Improvement). We are here to encourage learning in public culture and help the student community with their life in/after college. We are currently a Rising Community and engaging students with our Workshops, Webinar, Learning Resources, and Opportunities in Tech."
                />
                <ChooseBox
                  title="Journey:"
                  text="There are clubs in many colleges that perform events/webinars but charge money from students to attend events and award completion certificates at the end of the program. In our experience, students are attending webinars just to earn certificates rather than learning technologies because of improper guidance. Since we are firm believers that students shouldn't have to pay for their learning, and it should be freely available to everyone We realized that my local students were not aware of open source, off-campus internships, or understanding life after college, open-source, DevOps, how to invest in the share market, and many other things, We thought that I should help our juniors or anyone who wants to learn by themselves and they never have to face helplessly. To combat the aforementioned scenarios, I initiated a community of students to empower them through the experience and exposure that I had gained over time through my involvement in different communities."
                />
                <ChooseBox
                  title="Open Source"
                  text="Learn about Git and GitHub and start your journey of Open Source Contribution. Open Source can help you to get many opportunities in Tech."
                />
                <ChooseBox
                  title="Workshops/Webinar/Bootcamps"
                  text="We make sure to provide technical guidance by connecting with mentors and students who are doing well in their careers. We wish to become a bridge between the students and mentors and provide them with the guidance or roadmap that the mentors follow to understand the path."
                />
                <ChooseBox
                  title="Student Programs"
                  text="Networking and Personal Branding are very important for a student to show his uniqueness to different students. We believe that Student Programs are the best way to showcase your skills and learn in public. We will guide students to join their favorite communities and how they can get ready to get accepted into these programs."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
