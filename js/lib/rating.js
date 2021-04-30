import { createStars, createRectangles} from './utility';

export default function addSymbols() {
    const journalStars = document.querySelector('.journal__stars');
    createStars().forEach((star) => {
        journalStars.appendChild(star); 
    })
    const journalRectangles = document.querySelector('.journal__rectangles');
    createRectangles().forEach((rectangle) => {
        journalRectangles.appendChild(rectangle);
    })
}

