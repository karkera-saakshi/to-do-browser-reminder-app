import { useEffect, useEffectEvent, useState } from "react"
import "../App.css";  
function Body()
{
    const [task, setTask] = useState("")
    const [arr, setArr] = useState([])
    const [timer, setTimer] = useState("");
    let notified;
    let newArr;
    let handleSumit = (event) =>
    {
        event.preventDefault();
        if(task.trim() ==="" || timer === "")
        {
            alert("Enter all feilds correctly");
            return;
        }
        newArr = [...arr, {task : task , time : timer , notified : false}]
        setArr(newArr)
        setTask("");
        setTimer("");
        localStorage.setItem("tasks", JSON.stringify(newArr))
    }
    let handleChange =(event)=>
    {
        setTask(event.target.value);
    }
    let handleDelete = (index) =>{
        newArr = arr.filter((ele,i)=>i!==index)
        setArr(newArr)
        localStorage.setItem("tasks", JSON.stringify(newArr))
    }
    let handleChangeTime = (event) =>
    {
        setTimer(event.target.value)
    }
    let handleAlerts = () =>
    {
        let updatedArr = arr.map((taskItem) =>
        {
            let now = new Date();
            let part = taskItem.time.split(":");
            let hour = parseInt(part[0]);
            let min = parseInt(part[1]);
            if( taskItem.notified == false &&hour === now.getHours() && min === now.getMinutes())
            {
                new Notification("Reminder!",{
                        body: `Time for you ${taskItem.task} which is sceduled at ${taskItem.time}`,
                        icon: "https://www.svgrepo.com/show/171740/notification.svg"
                })
                return { ...taskItem, notified : true }
            }
            return taskItem;
        })
        setArr(updatedArr)
    }
    let askPermission = () =>
    {
        Notification.requestPermission().then(permission => {
            if(permission === "granted") {
                new Notification("Notification Enabled!",{
                    body: "You will receive notification of your upcoming task!",
                    icon: "https://www.svgrepo.com/show/171740/notification.svg"
                })
            } 
            else {
                console.log("User denied notifications or dismissed");
            }
        });
    }
    useEffect(() =>{
        const interval = setInterval(()=>handleAlerts(), 1000);
        return() => clearInterval(interval);
    }, [arr])
    useEffect(()=>{
        let data = localStorage.getItem("tasks");
        if(data)
        {
            setArr(JSON.parse(data));
        }
    },[])
    return <div id="body">
        <button onClick={askPermission} id="enableNotification">Enable Notification?</button>
        <form onSubmit={(event)=>{handleSumit(event)}}>
            <input type="text" onChange={(event)=>handleChange(event)} value={task} id="task" placeholder="Enter your task"/>
            <input type="time" onChange={(event)=>handleChangeTime(event)} value={timer} id="time"></input>
            <button type="submit" id="submitBtn">Submit</button>
        </form>
        <div id="dispalyContainer">
            {arr.map(
                (str, index)=>{
                    return <div key={index} id="display">
                        <b id="displayTask">{str.task}</b>
                        <b id="displayTime">{str.time}</b>
                        <button onClick={()=>handleDelete(index)} id="deleteBtn">Delete</button>
                    </div>
                }
            )}
        </div>
    </div>
}
export default Body