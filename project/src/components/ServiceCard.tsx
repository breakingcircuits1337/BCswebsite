import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;