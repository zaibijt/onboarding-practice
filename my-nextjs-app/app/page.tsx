'use client'
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
       <Header/>
      <Card title="Welcome" description="This is my first Next.js project!" />
      <Button text="Click Me" onClick={() => alert('Hello!')} />
        
    </div>
  )
}