"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function PublishToggle({ testId, published, setPublished }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (testId) {
      // Edit mode → fetch published status
      setLoading(true);
      fetch(`/api/tests/${testId}`)
        .then((res) => res.json())
        .then((data) => {
          setPublished(data.published);
          setLoading(false);
        });
    }
  }, [testId, setPublished]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium text-slate-800">Publish Test</p>
        <p className="text-sm text-slate-500">Make this test visible to students</p>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`text-sm font-medium ${
            published ? "text-green-600" : "text-slate-400"
          }`}
        >
          {published ? "Published" : "Unpublished"}
        </span>

        <Switch checked={published} onCheckedChange={setPublished} />
      </div>
    </div>
  );
}
