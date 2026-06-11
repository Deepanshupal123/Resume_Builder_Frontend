import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar";
import CreateResumeCard from "./CreateResumeCard";
import ResumeCard from "./ResumeCard";
import ResumeHeader from "./ResumeHeader";
import SearchFilterBar from "./SearchFilterBar";

const MyResume = () => {

    const resumeData = [
        {
            id: 1,
            title: "Senior Product Designer",
            status: "Exported",
            updated: "Updated 2 days ago",
        },
        {
            id: 2,
            title: "Creative Director",
            status: "Draft",
            updated: "Edited 4 hours ago",
        },
        {
            id: 3,
            title: "UX Lead - Fintech",
            status: "Exported",
            updated: "Updated 1 week ago",
        },
    ];


    return (
        <div className=" mx-auto flex flex-col gap-4">
            <div className="max-w-7xl mx-auto px-6">

                <ResumeHeader />

                <SearchFilterBar />

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
                    {resumeData.map((resume) => (
                        <ResumeCard
                            key={resume.id}
                            resume={resume}
                        />
                    ))}

                    <CreateResumeCard />
                </div>
            </div>
        </div>
    );
};

export default MyResume;

