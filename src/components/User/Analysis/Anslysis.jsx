
import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar";
import AnalysisHeader from "./AnalysisHeader";
import ATSScoreCard from "./ATSScoreCard";
import DocumentPreview from "./DocumentPreview";
import ExecutiveReview from "./ExecutiveReview";
import KeywordMatchCard from "./KeywordMatchCard";
import StructuralInsights from "./StructuralInsights";

const Analysis = () => {
    return (
        <div className="mx-auto flex flex-col gap-4">
            <div className="max-w-7xl mx-auto px-6 py-10">

                <AnalysisHeader />

                <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-4">
                        <ATSScoreCard />
                    </div>

                    <div className="md:col-span-8">
                        <KeywordMatchCard />
                    </div>

                    <div className="md:col-span-7 space-y-6">
                        <StructuralInsights />
                        <ExecutiveReview />
                    </div>

                    <div className="md:col-span-5">
                        <DocumentPreview />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analysis;
