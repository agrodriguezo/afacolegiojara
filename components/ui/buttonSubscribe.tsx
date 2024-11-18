
'use client';
import { Button } from "../ui/button";
import formbricks from "@formbricks/js";
import { useEffect } from "react";

export function ButtonSubscribe() {
    useEffect(() => {
        formbricks.init({
            environmentId: "cm3dcqe5n000ibdyttbzj3ez4", 
            apiHost: "https://forms.orenyi.com",
        });
        
      }, []);

    const handleClick = () => {
        formbricks.reset();

        formbricks.track("clickedStartSubscription");
    };
  
    return (
      <pre className="rounded-md p-6 my-6 relative flex items-center justify-center gap-2">
        <Button id="sendSubscription"
          onClick={handleClick}
          variant={"outline"}
          className="font-leaguespartan text-2xl px-6 py-6 bg-[#e1af40] border-black uppercase font-bold" size={"sm"}
        >
            Empezar
        </Button>
 
      </pre>
    );
  }


  
