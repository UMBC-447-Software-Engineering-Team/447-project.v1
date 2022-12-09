import { useState } from "react";

export default function Contact() {

        const fortunes = [
          "A friend is a treasure",
          "An enemy is a lesson",
          "A journey is a reward",
          "Life is an adventure",
          "Love is a gift"
        ];
      
        const [fortune, setFortune] = useState(null);
      
        function generateFortune() {
          const index = Math.floor(Math.random() * fortunes.length);
          setFortune(fortunes[index]);
        }
      
    return (
        <div class="contacts">
        <p>Welcome to the Contact Us page.  Below are our ways of contact.</p>
        <p><b>Phone:  410-399-2887</b></p>
        <p><b>Email:  ezwatts@gmail.com</b></p>
        <p><b>Other Contacts</b></p>
        <p>Ace</p>
        <p>Joud</p>
        <p>Marc</p>
        <p>Tanner</p>
        <p>Zoe</p>
        <button onClick={generateFortune}>Open Fortune Cookie</button>
        {fortune && <p>{fortune}</p>}
    </div>
    )
  } 