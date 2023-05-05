import React from "react";

type TasksProps = {
    data: DataType
}

type DataType = {
    title: string
    tasks: TasksType[]
    students: Array<string>
}

type  TasksType = {
    taskId: number
    title: string
    isDone: boolean
}


export const Tasks = (props: TasksProps) => {
    return (
        <>
            <h3>What to learn</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.data.tasks.map((element) => {
                    return (
                        <li><input type="checkbox" checked={element.isDone}/>
                            <span>{element.title}</span>
                            <span>{element.taskId}</span>
                            <span>{element.isDone}</span>
                        </li>
                    )
                })}
                {props.data.students.map((element: string) => {
                        return (
                            <li>{element}</li>
                        )
                    }
                )}
            </ul>
        </>
    )
}
