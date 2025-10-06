import React from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import api from "@/lib/axios";

const AddTask = ({ handleNewTaskAdded }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const addTask = async () => {
    if (newTaskTitle.trim()) {
      try {
        await api.post("/tasks", {
          title: newTaskTitle,
        });
        toast.success("Task added successfully!");
        handleNewTaskAdded();
      } catch (error) {
        console.error("Error adding task:", error);
        toast.error("Failed to add task. Please try again later.");
      }

      setNewTaskTitle("");
    } else {
      toast.error("Task title cannot be empty.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <Card className="p-6 border-0  bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="Add a new task..."
          className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          className="px-6"
          size="xl"
          variant="gradient"
          onClick={addTask}
          disabled={!newTaskTitle.trim()}
        >
          <Plus className="size-5" />
          Add
        </Button>
      </div>
    </Card>
  );
};
export default AddTask;
