import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const MainSpeech = () => {
  return ( 
    <Card className="w-1/3">
      <CardHeader><CardTitle>Transcript</CardTitle></CardHeader>
      <CardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aspernatur provident voluptatum doloremque debitis facilis, repellat deserunt maiores magnam perferendis expedita reprehenderit molestiae ullam eaque eius error, id dolore quae.</CardContent>
    </Card>
   );
}

export default MainSpeech;