"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TestForm({ testId, testTitle, setTestTitle }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (testId) {
      // Edit mode → fetch existing test
      setLoading(true);
      fetch(`/api/tests/${testId}`)
        .then((res) => res.json())
        .then((data) => {
          setTestTitle(data.title);
          setLoading(false);
        });
    }
  }, [testId, setTestTitle]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Test Title
        </label>
        <Input
          placeholder="Enter test title"
          value={testTitle}
          onChange={(e) => setTestTitle(e.target.value)}
          className="
            text-slate-900 
            placeholder:text-slate-400
            focus-visible:ring-2 
            focus-visible:ring-blue-600
          "
        />
      </div>
    </div>
  );
}
