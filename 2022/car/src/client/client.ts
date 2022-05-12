
import { SceneManager, SCENE } from './SceneManager';
import {Debug} from "./Debug";
Debug.Log("20220508");

SceneManager.instance().OnClick("startGameButton",
    () => {

        const overlay: HTMLElement | null = document.getElementById('overlay');

        if (overlay != null) {
            overlay.style.visibility = "hidden";
            //overlay.style.visibility="visible";

            SceneManager.instance().SetScene(SCENE.SceneGame);
        }
    }
);

SceneManager.instance().OnClick("startGame2Button",
    () => {

        const overlay: HTMLElement | null = document.getElementById('overlay');

        if (overlay != null) {
            overlay.style.visibility = "hidden";
            //overlay.style.visibility="visible";

            SceneManager.instance().SetScene(SCENE.SceneGame2);
        }
    }
);


SceneManager.instance().OnClick("start360Button",
    () => {
        const overlay: HTMLElement | null = document.getElementById('overlay');
        if (overlay != null) {
            overlay.style.visibility = "hidden";
            SceneManager.instance().SetScene(SCENE.Scene360);
        }
    }
);

SceneManager.instance().OnClick("startCarButton",
    () => {
        const overlay: HTMLElement | null = document.getElementById('overlay');
        if (overlay != null) {
            overlay.style.visibility = "hidden";
            SceneManager.instance().SetScene(SCENE.SceneCar);
        }
    }
);

//SceneManager.instance().SetScene(SCENE.SceneGame2);




//SceneManager.instance().SetScene(SCENE.Scene360);



// function DoSendEvent(event:string)
// {
//     SceneManager.instance().OnClick(event);
// }

// InitEvent(DoEvent);

// function InitEvent(event:any)
// {
//     Debug.Log("InitEvent");
//     SceneManager.instance().Init(event);
// }

// export {DoSendEvent,InitEvent}







// import { SceneManager, SCENE } from './SceneManager';
// Debug.Log("20220508");


// const startGameButton: any = document.getElementById('startGameButton');
// startGameButton.addEventListener('click', () => {

//     const overlay: HTMLElement | null = document.getElementById('overlay');

//     if (overlay != null) {
//         //overlay.hidden = true;
//         //overlay.style.display="none";
//         overlay.style.visibility = "hidden";
//         //overlay.style.visibility="visible";

//         SceneManager.instance().SetScene(SCENE.SceneGame);
//     }
// });

// const start360Button: any = document.getElementById('start360Button');

// start360Button.OnClick('click', () => {

//     const overlay: HTMLElement | null = document.getElementById('overlay');

//     if (overlay != null) {
//         //overlay.hidden = true;
//         //overlay.style.display="none";
//         overlay.style.visibility = "hidden";
//         //overlay.style.visibility="visible";

//         SceneManager.instance().SetScene(SCENE.Scene360);
//     }
// });

// SceneManager.instance().OnClick("startGameButton",
//     () => {

//         const overlay: HTMLElement | null = document.getElementById('overlay');

//         if (overlay != null) {
//             //overlay.hidden = true;
//             //overlay.style.display="none";
//             overlay.style.visibility = "hidden";
//             //overlay.style.visibility="visible";

//             SceneManager.instance().SetScene(SCENE.SceneGame);
//         }
// );






// SceneManager.instance().addClickEvent("start360Button",
//     () => {
//         const overlay: HTMLElement | null = document.getElementById('overlay');
//         if (overlay != null) {
//             overlay.style.visibility = "hidden";
//             SceneManager.instance().SetScene(SCENE.Scene360);
//         }
// );




// //SceneManager.instance().SetScene(SCENE.Scene360);



// // function DoSendEvent(event:string)
// // {
// //     SceneManager.instance().OnClick(event);
// // }

// // InitEvent(DoEvent);

// // function InitEvent(event:any)
// // {
// //     Debug.Log("InitEvent");
// //     SceneManager.instance().Init(event);
// // }

// // export {DoSendEvent,InitEvent}
