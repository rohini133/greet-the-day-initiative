import { motion } from "framer-motion";

export function HowItWorksSection() {
    const steps = [
        {
            number: "01",
            title: "Assess Your Skills",
            description:
                "Take our AI-powered assessment to identify your strengths, areas for improvement, and learning style.",
        },
        {
            number: "02",
            title: "Explore Career Paths",
            description:
                "Discover potential career paths based on your skills, interests, and market demand.",
        },
        {
            number: "03",
            title: "Learn with Guidance",
            description:
                "Engage with adaptive courses and expert mentors who provide personalized guidance.",
        },
        {
            number: "04",
            title: "Build Your Portfolio",
            description:
                "Apply your skills through real-world projects and build a portfolio that showcases your abilities.",
        },
    ];

    return (
        <div className="bg-[#0F1026] text-white py-16 px-8">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl text-primary font-bold">How It Works</h2>
                <p className="text-lg text-blue-200 mt-4">
                    Your journey from career discovery to professional success in four strategic stages.
                </p>
            </div>

            {/* Zig-Zag Layout */}
            <div className="space-y-12">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center ${
                            index % 2 === 0 ? "lg:flex-row-reverse" : ""
                        }`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        {/* Step Content */}
                        <div className="max-w-lg bg-black text-white shadow-lg p-6 rounded-xl lg:w-1/2">
                            <div className="flex items-center space-x-2">
                                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                                    {step.number}
                                </div>
                                <h3 className="text-xl text-primary font-semibold">{step.title}</h3>
                            </div>
                            <p className="text-sm text-gray-300 mt-4">{step.description}</p>
                        </div>

                        {/* Connector Line */}
                        <div className="hidden lg:block w-16 h-1 bg-blue-500 lg:w-1/6 mx-6"></div>

                        {/* Image Placeholder */}
                        <div className="w-48 h-48 bg-blue-500 rounded-lg flex items-center justify-center text-xl font-bold">
                            IMG
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
