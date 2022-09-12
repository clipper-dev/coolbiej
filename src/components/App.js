import styles from './App.module.css'
import { Button } from './Button';
import React, { useState, useRef, useEffect } from 'react';
import { EditTodoModal, AddNewProjectModal } from './Modal'
import { TodoItem, TodoItemCompact } from './TodoItem'
import { v4 as uuidv4 } from 'uuid';

function App() {

       
	//hooks for different modals

	const [newUser, setNewUser] = useState(false); //launched everytime app is launched if the user is new
	const [changeName, setChangeName] = useState(false); //change name

       // Handling of the animation
       const animationContainer = useRef(null);
       const [lottie, setLottie] = useState(null);
       // Hook for importing the animation
       useEffect(() => {
              import('lottie-web').then((Lottie) => setLottie(Lottie.default));
       }, []);
       // Hook for loading the animation
       useEffect(() => {
              if (lottie && animationContainer.current) {
                     const animation = lottie.loadAnimation({
                            container: animationContainer.current,
                            renderer: 'svg',
                            loop: true,
                            autoplay: true,
                            // path to your animation file, place it inside public folder
                            path: 'anims/construction.json',
                     });
                     return () => animation.destroy();
              }
       }, [lottie]);

       return (
              <>
                     <div className={styles['main-app-container']}>
                            <div className={styles['left-column ']}>

                            </div>
                            <div className={styles['container']}>
                                   <h1>The app is still under construction.</h1>
                                   <div className={styles['animation-container']} ref={animationContainer}></div>

                            </div>
                            <div className={styles['right-column']}>

                            </div>
                     </div>
              </>
       )

}

export default App