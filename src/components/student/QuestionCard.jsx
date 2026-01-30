"use client";

//import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function StudentQuestionCard({ question, options, onAnswer }) {
  return (
    <Card className="w-full max-w-xl mx-auto rounded-2xl shadow-md">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {question}
        </h2>

        <div className="space-y-2">
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start"
              onClick={() => onAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
