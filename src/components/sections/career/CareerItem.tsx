import { CareerItem as CareerItemInterface } from '../../../configs/interfaces';

export default function CareerItem({ title, company, duration, description }: CareerItemInterface) {
  return (
    <div className="career-card">
      <h3>{title}</h3>
      <p className="company-duration">{company} | {duration}</p>
      <p>{description}</p>
    </div>
  );
}
