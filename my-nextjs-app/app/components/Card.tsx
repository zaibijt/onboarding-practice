interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 m-4">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}