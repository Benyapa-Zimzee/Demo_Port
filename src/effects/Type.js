import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "I'M BORN TO BE DEVELOPER!!!",
              "I CAN DO EVERYTHING!!!",
              "I TRY FOR MY WHOLE LIFE!!!",
              "I LOVE MY SELF!!!"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type