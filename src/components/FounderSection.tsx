import { Award, Star, GraduationCap } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About the Founder
          </h2>
          <p className="text-lg text-gray-600">
            Meet the visionary behind Nural's revolutionary financial approach
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text">Siddarth Gowda</h3>
            <p className="text-gray-700 leading-relaxed">
              Siddarth Gowda combines deep expertise in financial markets with
              AI technology to revolutionize trading. He identified the need for
              a unified platform that comprehensively addresses traders' needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His vision for Nural is to democratize access to advanced trading
              tools, enabling traders of all levels to leverage AI for better
              decision-making. Under his leadership, Nural has evolved into a
              platform that simplifies trading and empowers users with greater
              precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center p-4 bg-white rounded-xl nural-shadow">
                <Award className="h-8 w-8 text-nural-600 mb-2" />
                <h4 className="font-semibold text-center">
                  10+ Years Experience
                </h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-xl nural-shadow">
                <Star className="h-8 w-8 text-nural-600 mb-2" />
                <h4 className="font-semibold text-center">
                  Award-Winning Strategies
                </h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-xl nural-shadow">
                <GraduationCap className="h-8 w-8 text-nural-600 mb-2" />
                <h4 className="font-semibold text-center">
                  4,000+ Investors Guided
                </h4>
              </div>
            </div>

            <blockquote className="italic border-l-4 border-nural-600 pl-4 py-2 text-gray-600">
              "Success in investing isn't just about strategies and indicators.
              It's about leveraging technology and expertise to make smarter
              decisions in any market condition."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
