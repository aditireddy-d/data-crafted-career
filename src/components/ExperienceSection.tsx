import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Data Analyst",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead data analyst for a team of 5, responsible for developing predictive models and business intelligence solutions. Reduced operational costs by 20% through data-driven optimization strategies.",
      achievements: [
        "Developed customer lifetime value model increasing retention by 25%",
        "Built automated reporting system saving 15 hours per week",
        "Led cross-functional team for data warehouse migration"
      ],
      technologies: ["Python", "SQL", "Tableau", "AWS", "Snowflake"]
    },
    {
      title: "Data Analyst",
      company: "FinanceFirst Inc.",
      period: "2020 - 2022",
      location: "New York, NY", 
      description: "Analyzed financial data to support investment decisions and risk management. Created comprehensive dashboards for executive leadership and regulatory reporting.",
      achievements: [
        "Implemented fraud detection system reducing losses by $1.5M",
        "Created regulatory compliance dashboard for SEC reporting",
        "Optimized portfolio performance through statistical analysis"
      ],
      technologies: ["R", "Python", "Power BI", "SQL Server", "Excel"]
    },
    {
      title: "Junior Data Analyst",
      company: "Retail Analytics Co.",
      period: "2019 - 2020",
      location: "Chicago, IL",
      description: "Performed market research and customer behavior analysis for retail clients. Supported senior analysts in developing machine learning models for demand forecasting.",
      achievements: [
        "Analyzed customer segmentation improving marketing ROI by 30%",
        "Built sales forecasting models with 85% accuracy",
        "Automated data collection processes reducing manual work by 40%"
      ],
      technologies: ["Python", "Pandas", "Matplotlib", "MySQL", "Jupyter"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A track record of delivering data solutions across various industries
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-1">{exp.title}</CardTitle>
                    <div className="text-primary font-semibold">{exp.company}</div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-muted-foreground text-sm flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;