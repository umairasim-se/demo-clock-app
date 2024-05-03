import React, { useEffect, useState } from 'react'
import classes from "./clock.module.css"

const Clock = () => {
    const [timer, setTimer] = useState(new Date());
    const [secondsTimer, setSecondsTimer] = useState(0);
    const [minutesTimer, setMinutesTiemr] = useState(0);
    const [hoursTimer, setHoursTiemr] = useState(0);

    console.log("🚀 ~ Clock ~ secondsTimer:", secondsTimer, minutesTimer, hoursTimer)

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date()
            setTimer(currentTime);

            const seconds = currentTime.getSeconds();
            const minutes = currentTime.getMinutes();
            const hours = currentTime.getHours();

            const secondsAngle = ((seconds / 60) * 360) // Angle for seconds on clock
            setSecondsTimer(secondsAngle)

            const minutesAngle = ((minutes / 60) * 360) // Angle for minutes
            setMinutesTiemr(minutesAngle)

            const hoursAngle = ((hours / 12) * 360) // Angle for hours
            setHoursTiemr(hoursAngle)

        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

  return (
    <div>
      <h2>It is {timer.toLocaleTimeString()}.</h2>

      <div className={classes.clock_container}>
        <div className={classes.clock_inner_container}>
            <div className={`${classes.clock_hand} ${classes.hour_hand}`} style={{transform: `rotate(${hoursTimer}deg)`}}></div>
            <div className={`${classes.clock_hand} ${classes.minute_hand}`} style={{transform: `rotate(${minutesTimer}deg)`}}></div>
            <div className={`${classes.clock_hand} ${classes.second_hand}`} style={{transform: `rotate(${secondsTimer}deg)`}}></div>
        </div>
      </div>
    </div>
  )
}

export default Clock