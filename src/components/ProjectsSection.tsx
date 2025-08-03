import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Customer Churn Prediction Model",
      description: "Developed a machine learning model to predict customer churn with 92% accuracy, helping reduce churn rate by 15% and saving $2M annually.",
      technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      type: "Machine Learning"
    },
    {
      title: "Sales Performance Dashboard",
      description: "Created an interactive Tableau dashboard for real-time sales monitoring, enabling data-driven decisions that increased sales efficiency by 25%.",
      technologies: ["Tableau", "SQL", "Python", "PostgreSQL"],
      type: "Data Visualization"
    },
    {
      title: "Market Basket Analysis",
      description: "Performed association rule mining on retail transaction data to optimize product placement and cross-selling strategies, boosting revenue by 18%.",
      technologies: ["R", "Apriori Algorithm", "ggplot2", "Shiny"],
      type: "Analytics"
    },
    {
      title: "Fraud Detection System",
      description: "Built an anomaly detection system using ensemble methods to identify fraudulent transactions with 95% precision and 89% recall.",
      technologies: ["Python", "TensorFlow", "Pandas", "AWS"],
      type: "Machine Learning"
    },
    {
      title: "A/B Testing Framework",
      description: "Designed and implemented a statistical framework for A/B testing that improved conversion rates by 12% across multiple product features.",
      technologies: ["Python", "SciPy", "Matplotlib", "SQL"],
      type: "Statistics"
    },
    {
      title: "Inventory Optimization Model",
      description: "Developed a demand forecasting model using time series analysis to optimize inventory levels, reducing costs by $500K annually.",
      technologies: ["Python", "Prophet", "ARIMA", "Plotly"],
      type: "Forecasting"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world projects that delivered measurable business impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs bg-accent/10 text-accent"
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

export default ProjectsSection;