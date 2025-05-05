import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
    <div>
      <Button variant={"elevated"}>A m button </Button>
    </div>
    <div>
      <Input placeholder="I am an input"></Input>
    </div>
    <div>
      <Progress value={20}/>
    </div>
    <div>
      <Textarea placeholder="I am a textarea"/>
    </div>
    <div>
    </div>
    </div>
    </div>
  );
}