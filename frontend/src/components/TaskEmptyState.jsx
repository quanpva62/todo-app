import React from "react";
import { Card } from "./ui/card";

const TaskEmptyState = ({ filter }) => {
  return (
    <Card className="p-8 text-center border-0 bg-gradient-card shadow-custom-md">
      <div className="mx-auto max-w-xs text-muted-foreground space-y-2">
        <h3 className="font-medium text-foreground">
          {filter === "active"
            ? "No active tasks found."
            : filter === "completed"
            ? "No completed tasks found."
            : "No tasks found."}
        </h3>

        <p className="text-sm text-muted-foreground">
          {filter === "all"
            ? "Add a new task to get started!"
            : `Try changing to the filter All to see ${
                filter === "active" ? "completed" : "active."
              }`}
        </p>
      </div>
    </Card>
  );
};

export default TaskEmptyState;
