import React from "react";

type ButtonProps = {
    name: string
    callBack: () => void
}
export const Button = (props: ButtonProps) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
            <button onClick={onClickHandler}>{props.name}</button>
    )
}


/*

/!*   const MyFirstSubscribe = (event:MouseEvent<HTMLButtonElement>) => {
       console.log("Hello! I'm Vasya");
   }

       const MySecondSubscribe = (event: MouseEvent<HTMLButtonElement>) => {
           console.log("Hello! I'm Ivan");
       }*!/

const onClickHandler = (name: string) => {
    console.log("Hello! My name is " + name);
}

/!* const foo1 = (event: MouseEvent<HTMLButtonElement>) => {
     console.log(100200);
 }

 const foo2 = (value: number) => {
     console.log(value)
 }
*!/


<div className="App">
    {/!*<button onClick={(event) => {console.log("Hello!")}}>MyYouTubeChannel-1</button>
                 <button onClick={MyFirstSubscribe}>MyYouTubeChannel-1</button>
                <button onClick={(event) => {onClickHandler("Vasya")}}>MyYouTubeChannel-1</button>
                <button onClick={(event) => {onClickHandler("Ivan")}}>MyYouTubeChannel-2</button>
                <button onClick={() => {onClickHandler("Ivan")}}>MyYouTubeChannel-3</button>

                <button onClick={foo1}>1</button>
                <button onClick={() => {foo2(500200)}}>2
                </button>
*!/}
    <button onClick={(event) => {onClickHandler("Vasya")}}>MyYouTubeChannel-1</button>
    <button onClick={() => {onClickHandler("Ivan")}}>MyYouTubeChannel-</button>
</div>*/
