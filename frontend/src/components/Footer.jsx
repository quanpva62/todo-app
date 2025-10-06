import { Button } from "@/components/ui/button";
import React from "react";

const Footer = ({ completedTasksCount = 0, activeTaskCount = 0 }) => {
  return (
    <>
      {completedTasksCount + activeTaskCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                Great job! You have completed {completedTasksCount} task
                {activeTaskCount > 0 &&
                  ` and have ${activeTaskCount} task(s) remaining.`}
              </>
            )}

            {completedTasksCount === 0 && activeTaskCount > 0 && (
              <>Let's start doing {activeTaskCount} task(s)!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
